import axios from 'axios';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
export const FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE';

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


export const fetchCustomerLoading = bool => ({
  type: 'CUSTOMER_LOADING',
  isLoading: bool,
});

export const fetchCustomerInfo = ({ id }) => (dispatch) => {
  dispatch(fetchCustomerLoading(true));
  return axios.get('/api/customers', {
    params: {
      id,
    },
  }).then(res => dispatch({
    type: FETCH_CUSTOMER_SUCCESS,
    customerInfo: res.data,
  }), err => dispatch({
    type: FETCH_CUSTOMER_FAILURE,
    error: err,
  }));
};
