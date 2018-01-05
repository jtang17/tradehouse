import axios from 'axios';

export const CHANGE_STREAM_SUCCESS = 'CHANGE_VIDEO_SUCCESS';
export const CHANGE_STREAM_FAILURE = 'CHANGE_VIDEO_FAILURE';
export const FETCH_STREAM_URL_SUCCESS = 'FETCH_STREAM_URL_SUCCESS';
export const FETCH_STREAM_URL_FAILURE = 'FETCH_STREAM_URL_FAILURE';
export const CHANGE_BROADCAST_MESSAGE_SUCCESS = 'CHANGE_BROADCAST_MESSAGE_SUCCESS';
export const CHANGE_BROADCAST_MESSAGE_FAILURE = 'CHANGE_BROADCAST_MESSAGE_FAILURE';
export const FETCH_BROADCAST_MESSAGE_SUCCESS = 'FETCH_BROADCAST_MESSAGE_SUCCESS';
export const FETCH_BROADCAST_MESSAGE_FAILURE = 'FETCH_BROADCAST_MESSAGE_FAILURE';
export const SELECT_FEATURED_PRODUCT_SUCCESS = 'SELECT_FEATURED_PRODUCT_SUCCESS';
export const SELECT_FEATURED_PRODUCT_FAILURE = 'SELECT_FEATURED_PRODUCT_FAILURE';
export const FETCH_FEATURED_PRODUCT_SUCCESS = 'FETCH_FEATURED_PRODUCT_SUCCESS';
export const FETCH_FEATURED_PRODUCT_FAILURE = 'FETCH_FEATURED_PRODUCT_FAILURE';
export const FETCH_STREAM_SUCCESS = 'FETCH_STREAM_SUCCESS';
export const FETCH_STREAM_FAILURE = 'FETCH_STREAM_FAILURE';
export const EDIT_STREAM_SUCCESS = 'EDIT_STREAM_SUCCESS';
export const EDIT_STREAM_FAILURE = 'EDIT_STREAM_FAILURE';

export const fetchStreamLoading = bool => ({
  type: 'STREAM_LOADING',
  isLoading: bool,
});

export const changeStream = (url, merchantId) => (dispatch) => {
  axios.put(`/api/merchants/${merchantId}/streams`, { url }) // TODO: FIX ROUTE
    .then(res => dispatch({
      type: CHANGE_STREAM_SUCCESS,
      url,
    }), err => dispatch({
      type: CHANGE_STREAM_FAILURE,
      error: err,
    }));
};

export const fetchStreamUrl = merchantId => (dispatch) => {
  axios.get(`api/merchants/${merchantId}/featured`)
    .then(res => dispatch({
      type: FETCH_STREAM_URL_SUCCESS,
      url: res.data,
    }), err => dispatch({
      type: FETCH_STREAM_URL_FAILURE,
      error: err,
    }));
};

export const changeBroadcastMessage = (broadcastMessage, merchantId) => (dispatch) => {
  axios.put(`/api/merchants/${merchantId}/broadcast_message`, { broadcastMessage })
    .then(res => dispatch({
      type: CHANGE_BROADCAST_MESSAGE_SUCCESS,
      broadcastMessage,
    }), err => dispatch({
      type: CHANGE_BROADCAST_MESSAGE_FAILURE,
      error: err,
    }));
};

export const fetchBroadcastMessage = merchantId => (dispatch) => {
  axios.get(`api/merchants/${merchantId}/featured`)
    .then(res => dispatch({
      type: FETCH_BROADCAST_MESSAGE_SUCCESS,
      broadcastMessage: res.data,
    }), err => dispatch({
      type: FETCH_BROADCAST_MESSAGE_FAILURE,
      error: err,
    }));
};

export const selectFeaturedProduct = (product, merchantId) => (dispatch) => {
  axios.put(`/api/merchants/${merchantId}/featured`, { product })
    .then(res => dispatch({
      type: SELECT_FEATURED_PRODUCT_SUCCESS,
      product,
    }), err => dispatch({
      type: SELECT_FEATURED_PRODUCT_FAILURE,
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
  axios.put(`/api/merchants/${id}/streams`, streamInfo)
    .then(res => dispatch({
      type: EDIT_STREAM_SUCCESS,
      streamInfo: res.data,
    }), err => dispatch({
      type: EDIT_STREAM_FAILURE,
      error: err,
    }));
