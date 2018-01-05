import axios from 'axios';

export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_FAILURE = 'REMOVE_FROM_CART_FAILURE';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_FAILURE = 'FETCH_CART_FAILURE';
export const INCREASE_QUANTITY_CART_SUCCESS = 'INCREASE_QUANTITY_CART_SUCCESS';
export const INCREASE_QUANTITY_CART_FAILURE = 'INCREASE_QUANTITY_CART_FAILURE';
export const DECREASE_QUANTITY_CART_SUCCESS = 'DECREASE_QUANTITY_CART_SUCCESS';
export const DECREASE_QUANTITY_CART_FAILURE = 'DECREASE_QUANTITY_CART_FAILURE';
export const EMPTY_CART = 'EMPTY_CART';

export const addToCart = (product, customerId) => (dispatch) => {
  axios.post(`/api/customers/${customerId}/cart`, product)
    .then(res => dispatch({
      type: ADD_TO_CART_SUCCESS,
      cart: res.data,
    }), err => dispatch({
      type: ADD_TO_CART_FAILURE,
      error: err,
    }));
};

export const removeFromCart = (product, customerId) => (dispatch) => {
  axios.delete(`/api/customers/${customerId}/cart`, { data: product })
    .then(res => dispatch({
      type: REMOVE_FROM_CART_SUCCESS,
      cart: res.data,
    }), err => dispatch({
      type: REMOVE_FROM_CART_FAILURE,
      error: err,
    }));
};

export const fetchCart = customerId => (dispatch) => {
  axios.get(`/api/customers/${customerId}/cart`)
    .then(res => dispatch({
      type: FETCH_CART_SUCCESS,
      cart: res.data,
    }), err => dispatch({
      type: FETCH_CART_FAILURE,
      error: err,
    }));
};

export const increaseQuantityInCart = (product, customerId) => (dispatch) => {
  axios.put(`/api/customers/${customerId}/cart`, { ...product, type: 'increase' })
    .then(res => dispatch({
      type: INCREASE_QUANTITY_CART_SUCCESS,
      cart: res.data,
    }), err => dispatch({
      type: INCREASE_QUANTITY_CART_FAILURE,
      error: err,
    }));
};

export const decreaseQuantityInCart = (product, customerId) => (dispatch) => {
  axios.put(`/api/customers/${customerId}/cart`, { ...product, type: 'decrease' })
    .then(res => dispatch({
      type: DECREASE_QUANTITY_CART_SUCCESS,
      cart: res.data,
    }), err => dispatch({
      type: DECREASE_QUANTITY_CART_FAILURE,
      error: err,
    }));
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
}