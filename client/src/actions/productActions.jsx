import axios from 'axios';

export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_SINGLE_PRODUCT_SUCCESS = 'FETCH_SINGLE_PRODUCT_SUCCESS';
export const FETCH_SINGLE_PRODUCT_FAILURE = 'FETCH_SINGLE_PRODUCT_FAILURE';

export const addProduct = product => (dispatch) => {
  axios.post('/api/products', product)
    .then(res => dispatch({
      type: ADD_PRODUCT_SUCCESS,
      product: res.data,
    }))
    .catch(err => dispatch({
      type: ADD_PRODUCT_FAILURE,
      error: err,
    }));
};

export const deleteProduct = product => (dispatch) => {
  axios.delete('/api/products', { data: product })
    .then(res => dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      items: res.data,
    }))
    .catch(err => dispatch({
      type: DELETE_PRODUCT_FAILURE,
      error: err,
    }));
};

export const fetchProducts = (url = '/api/products') => (dispatch) => {
  dispatch(fetchProductsLoading(true));
  axios.get(url)
    .then(res => dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      items: res.data,
    }))
    .catch(err => dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      error: err,
    }));
};

export const fetchProductsLoading = bool => ({
  type: 'PRODUCTS_LOADING',
  isLoading: bool,
});

export const fetchSingleProduct = productId => (dispatch) => {
  axios.get(`/api/products/${productId}`)
    .then(res => dispatch({
      type: FETCH_SINGLE_PRODUCT_SUCCESS,
      product: res.data,
    }))
    .catch(err => dispatch({
      type: FETCH_SINGLE_PRODUCT_FAILURE,
      error: err,
    }));
};
