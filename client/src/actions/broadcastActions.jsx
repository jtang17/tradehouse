import axios from 'axios';

export const CHANGE_STREAM_SUCCESS = 'CHANGE_VIDEO_SUCCESS';
export const CHANGE_STREAM_FAILURE = 'CHANGE_VIDEO_FAILURE';
export const GET_STREAM_URL_SUCCESS = 'GET_STREAM_URL_SUCCESS';
export const GET_STREAM_URL_FAILURE = 'GET_STREAM_URL_FAILURE';
export const CHANGE_BROADCAST_MESSAGE_SUCCESS = 'CHANGE_BROADCAST_MESSAGE_SUCCESS';
export const CHANGE_BROADCAST_MESSAGE_FAILURE = 'CHANGE_BROADCAST_MESSAGE_FAILURE';
export const GET_BROADCAST_MESSAGE_SUCCESS = 'GET_BROADCAST_MESSAGE_SUCCESS';
export const GET_BROADCAST_MESSAGE_FAILURE = 'GET_BROADCAST_MESSAGE_FAILURE';
export const SELECT_FEATURED_PRODUCT_SUCCESS = 'SELECT_FEATURED_PRODUCT_SUCCESS';
export const SELECT_FEATURED_PRODUCT_FAILURE = 'SELECT_FEATURED_PRODUCT_FAILURE';
export const GET_FEATURED_PRODUCT_SUCCESS = 'GET_FEATURED_PRODUCT_SUCCESS';
export const GET_FEATURED_PRODUCT_FAILURE = 'GET_FEATURED_PRODUCT_FAILURE';

// TODO: PASS IN ID THROUGH FUNCTIONS AND REMOVE STATIC ID ASSIGNMENT ON NEXT LINE
const id = 1;

export const changeStream = url => (dispatch) => {
  axios.put(`/api/merchants/${id}/stream`, { url }) // TODO: FIX ROUTE
    .then(res => dispatch({
      type: CHANGE_STREAM_SUCCESS,
      url,
    }))
    .catch(err => dispatch({
      type: CHANGE_STREAM_FAILURE,
      url, // TODO: take this out when routes set up
      error: err,
    }));
};

export const getStreamUrl = (merchantId) => (dispatch) => {
  axios.get(`api/merchants/${id}/featured`)
    .then(res => dispatch({
      type: GET_STREAM_URL_SUCCESS,
      url: res.data,
    }))
    .catch(err => dispatch({
      type: GET_STREAM_URL_FAILURE,
      error: err,
    }));
};

export const changeBroadcastMessage = broadcastMessage => (dispatch) => {
  axios.put(`/api/merchants/${id}/broadcast_message`, { broadcastMessage }) // TODO: FIX ROUTE
    .then(res => dispatch({
      type: CHANGE_BROADCAST_MESSAGE_SUCCESS,
      broadcastMessage,
    }))
    .catch(err => dispatch({
      type: CHANGE_BROADCAST_MESSAGE_FAILURE,
      broadcastMessage, // TODO: take this out when routes set up
      error: err,
    }));
};

export const getBroadcastMessage = (merchantId) => (dispatch) => {
  axios.get(`api/merchants/${id}/featured`)
    .then(res => dispatch({
      type: GET_BROADCAST_MESSAGE_SUCCESS,
      broadcastMessage: res.data,
    }))
    .catch(err => dispatch({
      type: GET_BROADCAST_MESSAGE_FAILURE,
      error: err,
    }));
};

export const selectFeaturedProduct = product => (dispatch) => {
  axios.put(`/api/merchants/${id}/featured`, { product }) // TODO: FIX ROUTE
    .then(res => dispatch({
      type: SELECT_FEATURED_PRODUCT_SUCCESS,
      product,
    }))
    .catch(err => dispatch({
      type: SELECT_FEATURED_PRODUCT_FAILURE,
      product, // TODO: take this out when routes set up
      error: err,
    }));
};

export const getFeaturedProduct = (merchantId) => (dispatch) => {
  axios.get(`api/merchants/${id}/featured`)
    .then(res => dispatch({
      type: GET_FEATURED_PRODUCT_SUCCESS,
      featuredProduct: res.data,
    }))
    .catch(err => dispatch({
      type: GET_FEATURED_PRODUCT_FAILURE,
      error: err,
    }));
};

