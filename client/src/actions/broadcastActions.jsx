import axios from 'axios';

export const CHANGE_VIDEO_SUCCESS = 'CHANGE_VIDEO_SUCCESS';
export const CHANGE_VIDEO_FAILURE = 'CHANGE_VIDEO_FAILURE';
export const CHANGE_BROADCAST_MESSAGE_SUCCESS = 'CHANGE_BROADCAST_MESSAGE_SUCCESS';
export const CHANGE_BROADCAST_MESSAGE_FAILURE = 'CHANGE_BROADCAST_MESSAGE_FAILURE';
export const SELECT_FEATURED_PRODUCT_SUCCESS = 'SELECT_FEATURED_PRODUCT_SUCCESS';
export const SELECT_FEATURED_PRODUCT_FAILURE = 'SELECT_FEATURED_PRODUCT_FAILURE';

// TODO: PASS IN ID THROUGH FUNCTIONS AND REMOVE STATIC ID ASSIGNMENT ON NEXT LINE
const id = 1;

export const changeVideo = url => (dispatch) => {
  axios.post(`/api/merchants/${id}/stream`, { url }) // TODO: FIX ROUTE
    .then(res => dispatch({
      type: CHANGE_VIDEO_SUCCESS,
      url,
    }))
    .catch(err => dispatch({
      type: CHANGE_VIDEO_FAILURE,
      url, // TODO: take this out when routes set up
      error: err,
    }));
};

export const changeBroadcastMessage = broadcastMessage => (dispatch) => {
  axios.post(`/api/merchants/${id}/broadcast`, { broadcastMessage }) // TODO: FIX ROUTE
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

export const selectFeaturedProduct = product => (dispatch) => {
  axios.post(`/api/merchants/${id}/featured`, { product }) // TODO: FIX ROUTE
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
