import axios from 'axios';

export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
export const FETCH_ALL_PRODUCTS_SUCCESS = 'FETCH_ALL_PRODUCTS_SUCCESS';
export const FETCH_ALL_PRODUCTS_FAILURE = 'FETCH_ALL_PRODUCTS_FAILURE';
export const FETCH_MERCHANT_PRODUCTS_SUCCESS = 'FETCH_MERCHANT_PRODUCTS_SUCCESS';
export const FETCH_MERCHANT_PRODUCTS_FAILURE = 'FETCH_MERCHANT_PRODUCTS_FAILURE';
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
      products: res.data,
    }))
    .catch(err => dispatch({
      type: DELETE_PRODUCT_FAILURE,
      error: err,
    }));
};

export const fetchAllProducts = (url = '/api/products') => (dispatch) => {
  dispatch(fetchProductsLoading(true));
  axios.get(url)
    .then(res => dispatch({
      type: FETCH_ALL_PRODUCTS_SUCCESS,
      products: res.data,
    }))
    .catch(err => dispatch({
      type: FETCH_ALL_PRODUCTS_FAILURE,
      error: err,
    }));
};

export const fetchMerchantProducts = id => (dispatch) => {
  dispatch(fetchProductsLoading(true));
  axios.get(`/api/merchants/${id}/products`)
    .then(res => dispatch({
      type: FETCH_MERCHANT_PRODUCTS_SUCCESS,
      products: res.data,
    }))
    .catch(err => dispatch({
      type: FETCH_MERCHANT_PRODUCTS_FAILURE,
      error: err,
    }));
};

export const fetchSingleProduct = productId => (dispatch) => {
  dispatch(fetchProductsLoading(true));
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

export const fetchProductsLoading = bool => ({
  type: 'PRODUCTS_LOADING',
  isLoading: bool,
});
