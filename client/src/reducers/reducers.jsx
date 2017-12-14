import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { cart } from './cartReducer.jsx';
import {
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CHANGE_VIDEO,
  CHANGE_BROADCAST_MESSAGE,
  SELECT_FEATURED_PRODUCT,
} from '../actions/actions.jsx';

function items(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS: {
      return [...state, action.product];
    }
    case ADD_PRODUCT_FAILURE: {
      console.error(action.error);
      return state;
      // notify user of error?
    }
    case DELETE_PRODUCT_SUCCESS: {
      return action.items;
    }
    case DELETE_PRODUCT_FAILURE: {
      console.error(action.error);
      return state;
      // notify user of error?
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return action.items;
    }
    case FETCH_PRODUCTS_FAILURE: {
      console.error(action.error);
      return state;
      // notify user of error?
    }
    default: {
      return state;
    }
  }
}
function broadcastMessage(state = '', action) {
  switch (action.type) {
    case CHANGE_BROADCAST_MESSAGE: {
      return action.broadcastMessage;
    }
    default: {
      return state;
    }
  }
}

function video(state = '', action) {
  switch (action.type) {
    case CHANGE_VIDEO: {
      return action.video;
    }
    default: {
      return state;
    }
  }
}

function featuredProduct(state = false, action) {
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

const tradehouseApp = combineReducers({
  cart,
  items,
  video,
  broadcastMessage,
  featuredProduct,
  form: formReducer,
});

export default tradehouseApp;
