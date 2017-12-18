import {
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
  FETCH_MERCHANT_PRODUCTS_SUCCESS,
  FETCH_MERCHANT_PRODUCTS_FAILURE,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILURE,
} from '../actions/productActions.jsx';

export function allProducts(state = [], action) {
  switch(action.type) {
    case FETCH_PRODUCTS_SUCCESS: {
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

export function products(state = [], action) {
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
      return action.products;
    }
    case DELETE_PRODUCT_FAILURE: {
      console.error(action.error);
      return state;
      // notify user of error?
    }
    case FETCH_ALL_PRODUCTS_SUCCESS: {
      return action.products;
    }
    case FETCH_ALL_PRODUCTS_FAILURE: {
      console.error(action.error);
      return state;
      // notify user of error?
    }
    default: {
      return state;
    }
  }
}

export function merchantProducts(state = [], action) {
  switch (action.type) {
    case FETCH_MERCHANT_PRODUCTS_SUCCESS: {
      return action.products;
    }
    case FETCH_MERCHANT_PRODUCTS_FAILURE: {
      console.error(action.error);
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
      console.error(action.error);
      return state;
    }
    default: {
      return state;
    }
  }
}
