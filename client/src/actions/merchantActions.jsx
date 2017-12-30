import axios from 'axios';

export const FETCH_MERCHANT_SUCCESS = 'FETCH_MERCHANT_SUCCESS';
export const FETCH_MERCHANT_FAILURE = 'FETCH_MERCHANT_FAILURE';
export const FETCH_STREAM_SUCCESS = 'FETCH_STREAM_SUCCESS';
export const FETCH_STREAM_FAILURE = 'FETCH_STREAM_FAILURE';
export const EDIT_STREAM_SUCCESS = 'EDIT_STREAM_SUCCESS';
export const EDIT_STREAM_FAILURE = 'EDIT_STREAM_FAILURE';
export const EDIT_MERCHANT_PROFILE_SUCCESS = 'EDIT_MERCHANT_PROFILE_SUCCESS';
export const EDIT_MERCHANT_PROFILE_FAILURE = 'EDIT_MERCHANT_PROFILE_FAILURE';
export const FETCH_ALL_MERCHANTS_SUCCESS = 'FETCH_ALL_MERCHANTS_SUCCESS';
export const FETCH_ALL_MERCHANTS_FAILURE = 'FETCH_ALL_MERCHANTS_FAILURE';

export const fetchMerchantLoading = bool => ({
  type: 'MERCHANT_LOADING',
  isLoading: bool,
});

export const fetchStreamLoading = bool => ({
  type: 'STREAM_LOADING',
  isLoading: bool,
});

export const fetchMerchantInfo = id => (dispatch) => {
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

export const editMerchantProfile = (id, profile) => dispatch =>
  axios.put(`/api/merchants/${id}`, { profile })
    .then(res => dispatch({
      type: EDIT_MERCHANT_PROFILE_SUCCESS,
      merchantInfo: res.data,
    }), err => dispatch({
      type: EDIT_MERCHANT_PROFILE_FAILURE,
      error: err,
    }));

export const fetchAllMerchants = () => dispatch => axios.get('/api/merchants')
  .then(res => dispatch({
    type: FETCH_ALL_MERCHANTS_SUCCESS,
    allMerchants: res.data,
  }), err => dispatch({
    type: FETCH_ALL_MERCHANTS_FAILURE,
    error: err,
  }));

export const fetchMerchantInfoByToken = () => (dispatch) => {
  dispatch(fetchMerchantLoading(true));
  return axios.get(`/api/merchants/bySub/${localStorage.idToken}`)
    .then(res => dispatch({
      type: FETCH_MERCHANT_SUCCESS,
      merchantInfo: res.data,
    }), err => dispatch({
      type: FETCH_MERCHANT_FAILURE,
      error: err,
    }));
};

export const fetchStreamInfo = id => (dispatch) => {
  dispatch(fetchStreamLoading(true));
  return axios.get(`/api/merchants/${id}/streams`)
    .then(res => dispatch({
      type: FETCH_STREAM_SUCCESS,
      streamInfo: res.data,
    }), err => dispatch({
      type: FETCH_STREAM_FAILURE,
      error: err,
    }));
};

export const editStreamInfo = (id, streamInfo) => dispatch =>
  axios.put(`/api/merchants/${id}/streams`, { streamInfo })
    .then(res => dispatch({
      type: EDIT_STREAM_SUCCESS,
      streamInfo: res.data,
    }), err => dispatch({
      type: EDIT_STREAM_FAILURE,
      error: err,
    }));
