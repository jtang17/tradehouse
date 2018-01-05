import {
  CHANGE_STREAM_SUCCESS,
  CHANGE_STREAM_FAILURE,
  FETCH_STREAM_URL_SUCCESS,
  FETCH_STREAM_URL_FAILURE,
  CHANGE_BROADCAST_MESSAGE_SUCCESS,
  CHANGE_BROADCAST_MESSAGE_FAILURE,
  FETCH_BROADCAST_MESSAGE_SUCCESS,
  FETCH_BROADCAST_MESSAGE_FAILURE,
  SELECT_FEATURED_PRODUCT_SUCCESS,
  SELECT_FEATURED_PRODUCT_FAILURE,
  FETCH_FEATURED_PRODUCT_SUCCESS,
  FETCH_FEATURED_PRODUCT_FAILURE,
  FETCH_STREAM_SUCCESS,
  FETCH_STREAM_FAILURE,
  EDIT_STREAM_SUCCESS,
  EDIT_STREAM_FAILURE,
} from '../actions/broadcastActions.jsx';

export function featuredProduct(state = false, action) {
  switch (action.type) {
    case SELECT_FEATURED_PRODUCT_SUCCESS: {
      return action.product;
    }
    case SELECT_FEATURED_PRODUCT_FAILURE: {
      return state;
    }
    case FETCH_FEATURED_PRODUCT_SUCCESS: {
      return action.featuredProduct;
    }
    case FETCH_FEATURED_PRODUCT_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export function streamInfo(state = {}, action) {
  switch (action.type) {
    case FETCH_STREAM_SUCCESS: {
      return action.streamInfo;
    }
    case FETCH_STREAM_FAILURE: {
      return state;
    }
    case EDIT_STREAM_SUCCESS: {
      return action.streamInfo;
    }
    case EDIT_STREAM_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
