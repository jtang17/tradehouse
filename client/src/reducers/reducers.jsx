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
  CHANGE_BROADCAST_MESSAGE
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
      console.log(action.title);
      const newState = state.slice();
      for (let i = 0; i < newState.length; i + 1) {
        if (newState[i].title === action.title) {
          newState.splice(i, 1);
        }
      }
      return newState;
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

function broadcastMessage(state ='', action) {
  switch (action.type) {
    case CHANGE_BROADCAST_MESSAGE: {
      return action.broadcastMessage;
    }
    default: {
      return state;
    }
  }
}

const tradehouseApp = combineReducers({
  items,
  video,
  broadcastMessage,
  form: formReducer,
});

export default tradehouseApp;
