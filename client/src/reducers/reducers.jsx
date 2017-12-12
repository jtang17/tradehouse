import { combineReducers } from 'redux';
import {
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CHANGE_VIDEO
} from '../actions/actions.jsx'

const initialState = {
  items: [],
}

function items(state = [], action) {
  switch (action.type) {
    // case ADD_PRODUCT_SUCCESS: {
    //   return state;
    // }
    case ADD_PRODUCT_FAILURE: {
      return action.error;
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return action.items;
    }
    case FETCH_PRODUCTS_FAILURE: {
      return action.error;
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
  // products,
  items,
  video
});

export default tradehouseApp;
