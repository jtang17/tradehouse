import axios from 'axios';

export const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
export const FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE';
export const FETCH_WISHLIST_SUCCESS = 'FETCH_WISHLIST_SUCCESS';
export const FETCH_WISHLIST_FAILURE = 'FETCH_WISHLIST_FAILURE';
export const ADD_WISHLISTED_PRODUCT_SUCCESS = 'ADD_WISHLISTED_PRODUCT_SUCCESS';
export const ADD_WISHLISTED_PRODUCT_FAILURE = 'ADD_WISHLISTED_PRODUCT_FAILURE';
export const REMOVE_WISHLISTED_PRODUCT_SUCCESS = 'REMOVE_WISHLISTED_PRODUCT_SUCCESS';
export const REMOVE_WISHLISTED_PRODUCT_FAILURE = 'REMOVE_WISHLISTED_PRODUCT_FAILURE';
export const FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_SUBSCRIPTIONS_SUCCESS';
export const FETCH_SUBSCRIPTIONS_FAILURE = 'FETCH_SUBSCRIPTIONS_FAILURE';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const fetchCustomerLoading = bool => ({
  type: 'CUSTOMER_LOADING',
  isLoading: bool,
});

export const fetchCustomerInfo = ({ id }) => (dispatch) => {
  dispatch(fetchCustomerLoading(true));
  return axios.get(`/api/customers/${id}`)
    .then(res => dispatch({
      type: FETCH_CUSTOMER_SUCCESS,
      customerInfo: res.data,
    }), err => dispatch({
      type: FETCH_WISHLIST_FAILURE,
      error: err,
    }));
};

export const fetchWishlist = customerId => dispatch => axios.get(`/api/customers/${customerId}/wishlist`)
  .then(res => dispatch({
    type: FETCH_WISHLIST_SUCCESS,
    wishlist: res.data,
  }), err => dispatch({
    type: FETCH_WISHLIST_FAILURE,
    error: err,
  }));

export const addWishlistedProduct = (customerId, product) => (dispatch) => {
  axios.post(`/api/customers/${customerId}/wishlist`, product)
    .then(res => dispatch({
      type: ADD_WISHLISTED_PRODUCT_SUCCESS,
      wishlist: res.data,
    }), err => dispatch({
      type: ADD_WISHLISTED_PRODUCT_FAILURE,
      error: err,
    }));
};

export const removeWishlistedProduct = (customerId, product) => (dispatch) => {
  console.log(product);
  axios.delete(`/api/customers/${customerId}/wishlist`, { data: { product } })
    .then(res => dispatch({
      type: REMOVE_WISHLISTED_PRODUCT_SUCCESS,
      wishlist: res.data,
    }), err => dispatch({
      type: REMOVE_WISHLISTED_PRODUCT_FAILURE,
      error: err,
    }));
};


export const fetchSubscriptions = customerId => dispatch => axios.get(`/api/customers/${customerId}/subscriptions`)
  .then(res => dispatch({
    type: FETCH_SUBSCRIPTIONS_SUCCESS,
    subscriptions: res.data,
  }), err => dispatch({
    type: FETCH_SUBSCRIPTIONS_FAILURE,
    error: err,
  }));

export const follow = (customerId, merchantId) => (dispatch) => {
  axios.post(`/api/customers/${customerId}/subscriptions`, { merchantId })
    .then(res => dispatch({
      type: FOLLOW_SUCCESS,
      subscriptions: res.data,
    }), err => dispatch({
      type: FOLLOW_FAILURE,
      error: err,
    }));
};

export const unfollow = (customerId, merchantId) => (dispatch) => {
  axios.delete(`/api/customers/${customerId}/subscriptions`, { data: { merchantId } })
    .then(res => dispatch({
      type: UNFOLLOW_SUCCESS,
      subscriptions: res.data,
    }), err => dispatch({
      type: UNFOLLOW_FAILURE,
      error: err,
    }));
};

export const fetchCustomerInfoByToken = () => (dispatch) => {
  dispatch(fetchCustomerLoading(true));
  return axios.get(`/api/customers/bySub/${localStorage.idToken}`)
    .then(res => dispatch({
      type: FETCH_CUSTOMER_SUCCESS,
      customerInfo: res.data,
    }), err => dispatch({
      type: FETCH_CUSTOMER_FAILURE,
      error: err,
    }));
};
