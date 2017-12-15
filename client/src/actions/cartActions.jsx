import axios from 'axios';

export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_FAILURE = 'REMOVE_FROM_CART_FAILURE';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_FAILURE = 'FETCH_CART_FAILURE';

export const TEST_ADD = 'TEST_ADD';

export const testAdd = (product) => ({
  type: TEST_ADD,
  product
});

export const addToCart = (product) => (dispatch) => {
  axios.post('/api/customers/:customerId/cart', product)
    .then(res => dispatch({
      type: ADD_TO_CART_SUCCESS,
      cart: res.data,
    }))
    .catch(err => dispatch({
      type: ADD_TO_CART_FAILURE,
      error: err,
    }));
};

export const removeFromCart = (product) => (dispatch) => {
  axios.delete('/api/customers/:customerId/cart', { data: product })
    .then(res => dispatch({
      type: REMOVE_FROM_CART_SUCCESS,
      cart: res.data,
    }))
    .catch(err => dispatch({
      type: REMOVE_FROM_CART_FAILURE,
      error: err,
    }));
};

export const fetchCart = () => (dispatch) => {
  axios.get('/api/customers/:customerId/cart')
    .then(res => dispatch({
      type: FETCH_CART_SUCCESS,
      cart: res.data,
    }))
    .catch(err => dispatch({
      type: FETCH_CART_FAILURE,
      error: err,
    }));
};