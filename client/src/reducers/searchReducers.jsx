import {
  FETCH_ALLSTREAMS_SUCCESS,
  FETCH_ALLSTREAMS_FAILURE,
  FETCH_STREAM_SEARCH_SUCCESS,
  FETCH_STREAM_SEARCH_FAILURE,
  FETCH_ALLMERCHANTS_SUCCESS,
  FETCH_ALLMERCHANTS_FAILURE,
  FETCH_MERCHANT_SEARCH_SUCCESS,
  FETCH_MERCHANT_SEARCH_FAILURE,
  FETCH_ALLPRODUCTS_SUCCESS,
  FETCH_ALLPRODUCTS_FAILURE,
  FETCH_PRODUCT_SEARCH_SUCCESS,
  FETCH_PRODUCT_SEARCH_FAILURE,
} from '../actions/searchActions.jsx';

export function allStreamsSearch(state = [], action) {
  switch (action.type) {
    case FETCH_ALLSTREAMS_SUCCESS: {
      return action.allStreamsSearch;
    }
    case FETCH_ALLSTREAMS_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
export function streamsSearch(state = [], action) {
  switch (action.type) {
    case FETCH_STREAM_SEARCH_SUCCESS: {
      return action.streamsSearch;
    }
    case FETCH_STREAM_SEARCH_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export function allMerchantsSearch(state = [], action) {
  switch (action.type) {
    case FETCH_ALLMERCHANTS_SUCCESS: {
      return action.allMerchantsSearch;
    }
    case FETCH_ALLMERCHANTS_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
export function merchantsSearch(state = [], action) {
  switch (action.type) {
    case FETCH_MERCHANT_SEARCH_SUCCESS: {
      return action.merchantsSearch;
    }
    case FETCH_MERCHANT_SEARCH_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export function allProductsSearch(state = [], action) {
  switch (action.type) {
    case FETCH_ALLPRODUCTS_SUCCESS: {
      return action.allProductsSearch;
    }
    case FETCH_ALLPRODUCTS_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
export function productsSearch(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCT_SEARCH_SUCCESS: {
      return action.productsSearch;
    }
    case FETCH_PRODUCT_SEARCH_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
