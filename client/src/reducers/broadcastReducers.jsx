import {
  CHANGE_VIDEO,
  CHANGE_BROADCAST_MESSAGE,
  SELECT_FEATURED_PRODUCT,
} from '../actions/broadcastActions.jsx';

export function broadcastMessage(state = '', action) {
  switch (action.type) {
    case CHANGE_BROADCAST_MESSAGE: {
      return action.broadcastMessage;
    }
    default: {
      return state;
    }
  }
}

export function featuredProduct(state = false, action) {
  switch (action.type) {
    case SELECT_FEATURED_PRODUCT: {
      console.log(action.product);
      return action.product;
    }
    default: {
      return state;
    }
  }
}

export function video(state = '', action) {
  switch (action.type) {
    case CHANGE_VIDEO: {
      return action.video;
    }
    default: {
      return state;
    }
  }
}

