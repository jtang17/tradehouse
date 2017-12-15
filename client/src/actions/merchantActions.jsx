import axios from 'axios';

export const FETCH_MERCHANT_SUCCESS = 'FETCH_MERCHANT_SUCCESS';
export const FETCH_MERCHANT_FAILURE = 'FETCH_MERCHANT_FAILURE';

export const fetchMerchantLoading = bool => ({
  type: 'MERCHANT_LOADING',
  isLoading: bool,
});

export const fetchMerchantInfo = ({ id }) => (dispatch) => {
  dispatch(fetchMerchantLoading(true));
  return axios.get(`/api/merchants/${id}`)
    .then(res => dispatch({
      type: FETCH_MERCHANT_SUCCESS,
      merchantInfo: res.data,
    }), err => dispatch({
      type: FETCH_MERCHANT_FAILURE,
      error: err,
    }));
};
