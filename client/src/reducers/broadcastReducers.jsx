import {
  CHANGE_VIDEO_SUCCESS,
  CHANGE_VIDEO_FAILURE,
  CHANGE_BROADCAST_MESSAGE_SUCCESS,
  CHANGE_BROADCAST_MESSAGE_FAILURE,
  SELECT_FEATURED_PRODUCT_SUCCESS,
  SELECT_FEATURED_PRODUCT_FAILURE,
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

export function video(state = '', action) {
  switch (action.type) {
    case CHANGE_VIDEO_SUCCESS: {
      return action.url;
    }
    case CHANGE_VIDEO_FAILURE: {
      console.error(action.error);
      return action.url;
      // return state;
    }
    default: {
      return state;
    }
  }
}

