import axios from 'axios';

export const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
export const FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE';
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
    }))
    .catch(err => dispatch({
      type: FETCH_CUSTOMER_FAILURE,
      error: err,
    }));
};

export const fetchSubscriptions = (customerId) => (dispatch) => {
  axios.get(`/api/customers/${customerId}/subscriptions`)
    .then(res => dispatch({
      type: FETCH_SUBSCRIPTIONS_SUCCESS,
      subscriptions: res.data,
    }))
    .catch(err => dispatch({
      type: FETCH_SUBSCRIPTIONS_FAILURE,
      error: err,
    }));
};

export const follow = (customerId, merchantId) => (dispatch) => {
  axios.post(`/api/customers/${customerId}/subscriptions`, { merchantId })
    .then(res => dispatch({
      type: FOLLOW_SUCCESS,
      subscriptions: res.data,
    }))
    .catch(err => dispatch({
      type: FOLLOW_FAILURE,
      error: err,
    }));
};

export const unfollow = (customerId, merchantId) => (dispatch) => {
  axios.delete(`/api/customers/${customerId}/subscriptions`, { data: { merchantId }})
    .then(res => dispatch({
      type: UNFOLLOW_SUCCESS,
      subscriptions: res.data,
    }))
    .catch(err => dispatch({
      type: UNFOLLOW_FAILURE,
      error: err,
    }));
};