import { combineReducers } from 'redux';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  CLEAR_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CHANGE_VIDEO
} from '../actions/actions.jsx'

const initialState = {
  items: [],
}

function products(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      // return Object.assign({}, state, { items: state.items.concat(action.product) });
      return {...state, items: [...state.items, action.product]}
    }
    case DELETE_PRODUCT: {
      const items = [].concat(state.items);
      items.splice(action.index, 1);
      return {...state, items};
    }
    case CLEAR_PRODUCTS: {
      return {...state, items: []};
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
  products,
  video
});

export default tradehouseApp;
