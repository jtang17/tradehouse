import axios from 'axios';

export const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
export const FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE';
export const FETCH_ALL_MERCHANTS_SUCCESS = 'FETCH_ALL_MERCHANTS_SUCCESS';
export const FETCH_ALL_MERCHANTS_FAILURE = 'FETCH_ALL_MERCHANTS_FAILURE';

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
