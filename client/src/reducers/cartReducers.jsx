import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
} from '../actions/cartActions.jsx';

export function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS: {
      return action.cart;
    }
    case ADD_PRODUCT_FAILURE: {
      console.error(action.error);
      return state;
      // notify user of error?
    }
    case DELETE_PRODUCT_SUCCESS: {
      return action.cart;
    }
    case DELETE_PRODUCT_FAILURE: {
      console.error(action.error);
      return state;
      // notify user of error?
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return action.cart;
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