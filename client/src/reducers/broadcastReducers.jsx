import {
  CHANGE_STREAM_SUCCESS,
  CHANGE_STREAM_FAILURE,
  GET_STREAM_URL_SUCCESS,
  GET_STREAM_URL_FAILURE,
  CHANGE_BROADCAST_MESSAGE_SUCCESS,
  CHANGE_BROADCAST_MESSAGE_FAILURE,
  GET_BROADCAST_MESSAGE_SUCCESS,
  GET_BROADCAST_MESSAGE_FAILURE,
  SELECT_FEATURED_PRODUCT_SUCCESS,
  SELECT_FEATURED_PRODUCT_FAILURE,
  GET_FEATURED_PRODUCT_SUCCESS,
  GET_FEATURED_PRODUCT_FAILURE,
} from '../actions/broadcastActions.jsx';

// TODO: failure cases should return state when api routes are properly set up

export function broadcastMessage(state = '', action) {
  switch (action.type) {
    case CHANGE_BROADCAST_MESSAGE_SUCCESS: {
      return action.broadcastMessage;
    }
    case CHANGE_BROADCAST_MESSAGE_FAILURE: {
      console.error(action.error);
      return action.broadcastMessage;
      // return state;
    }
    default: {
      return state;
    }
  }
}

export function featuredProduct(state = false, action) {
  switch (action.type) {
    case SELECT_FEATURED_PRODUCT_SUCCESS: {
      return action.product;
    }
    case SELECT_FEATURED_PRODUCT_FAILURE: {
      console.error(action.error);
      return action.product;
      // return state;
    }
    default: {
      return state;
    }
  }
}

export function stream(state = '', action) {
  switch (action.type) {
    case CHANGE_STREAM_SUCCESS: {
      return action.url;
    }
    case CHANGE_STREAM_FAILURE: {
      console.error(action.error);
      return action.url;
      // return state;
    }
    default: {
      return state;
    }
  }
}

