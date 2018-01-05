import {
  ADD_MERCHANT_PRODUCT_SUCCESS,
  ADD_MERCHANT_PRODUCT_FAILURE,
  DELETE_MERCHANT_PRODUCT_SUCCESS,
  DELETE_MERCHANT_PRODUCT_FAILURE,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
  FETCH_MERCHANT_PRODUCTS_SUCCESS,
  FETCH_MERCHANT_PRODUCTS_FAILURE,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILURE,
} from '../actions/productActions.jsx';

export function allProducts(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_SUCCESS: {
      return action.allProducts;
    }
    case FETCH_ALL_PRODUCTS_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export function merchantProducts(state = [], action) {
  switch (action.type) {
    case ADD_MERCHANT_PRODUCT_SUCCESS: {
      return [...state, action.product];
    }
    case ADD_MERCHANT_PRODUCT_FAILURE: {
      return state;
    }
    case DELETE_MERCHANT_PRODUCT_SUCCESS: {
      return action.products;
    }
    case DELETE_MERCHANT_PRODUCT_FAILURE: {
      return state;
    }
    case FETCH_MERCHANT_PRODUCTS_SUCCESS: {
      return action.products;
    }
    case FETCH_MERCHANT_PRODUCTS_FAILURE: {
      return state;
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
      return state;
    }
    default: {
      return state;
    }
  }
}
