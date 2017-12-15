import {
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILURE,
} from '../actions/productActions.jsx';

export function items(state = [], action) {
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

export function singleProduct(state = {}, action) {
  switch (action.type) {
    case FETCH_SINGLE_PRODUCT_SUCCESS: {
      return action.product;
    }
    case FETCH_SINGLE_PRODUCT_FAILURE: {
      console.error(action.error);
      return state;
    }
    default: {
      return state;
    }
  }
}
