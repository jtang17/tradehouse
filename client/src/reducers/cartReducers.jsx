import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  INCREASE_QUANTITY_CART_SUCCESS,
  INCREASE_QUANTITY_CART_FAILURE,
  DECREASE_QUANTITY_CART_SUCCESS,
  DECREASE_QUANTITY_CART_FAILURE,
} from '../actions/cartActions.jsx';

export function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS: {
      return action.cart;
    }
    case ADD_TO_CART_FAILURE: {
      console.error(action.error);
      return state;
      // notify user of error?
    }
    case REMOVE_FROM_CART_SUCCESS: {
      return action.cart;
    }
    case REMOVE_FROM_CART_FAILURE: {
      console.error(action.error);
      return state;
      // notify user of error?
    }
    case FETCH_CART_SUCCESS: {
      return action.cart;
    }
    case FETCH_CART_FAILURE: {
      console.error(action.error);
      return state;
      // notify user of error?
    }
    case INCREASE_QUANTITY_CART_SUCCESS: {
      return action.cart;
    }
    case INCREASE_QUANTITY_CART_FAILURE: {
      console.error(action.error);
      return state;
      // notify user of error?
    }
    case DECREASE_QUANTITY_CART_SUCCESS: {
      return action.cart;
    }
    case DECREASE_QUANTITY_CART_FAILURE: {
      console.error(action.error);
      return state;
      // notify user of error?
    }
    default: {
      return state;
    }
  }
}