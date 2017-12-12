import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CHANGE_VIDEO,
} from '../actions/actions.jsx';

const initialState = {
  items: [],
}

function items(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS: {
      return [...state, action.product];
    }
    case ADD_PRODUCT_FAILURE: {
      return action.error;
    }
    case DELETE_PRODUCT_SUCCESS: {
      return state;
      //return state without deleted product
    }
    case DELETE_PRODUCT_FAILURE: {
      return state;
      //use action.error for some notification system for user?
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return action.items;
    }
    case FETCH_PRODUCTS_FAILURE: {
      return state;
      //use action.error for some notification system for user?
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

const tradehouseApp = combineReducers({
  items,
  video,
  form: formReducer,
});

export default tradehouseApp;
