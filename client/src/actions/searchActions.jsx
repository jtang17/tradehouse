import axios from 'axios';
// STREAM SEARCH ACTIONS
export const FETCH_ALLSTREAMS_SUCCESS = 'FETCH_ALLSTREAMS_SUCCESS';
export const FETCH_ALLSTREAMS_FAILURE = 'FETCH_ALLSTREAMS_FAILURE';
export const FETCH_STREAM_SEARCH_SUCCESS = 'FETCH_STREAM_SEARCH_SUCCESS';
export const FETCH_STREAM_SEARCH_FAILURE = 'FETCH_STREAM_SEARCH_FAILURE';
// MERCHANT SEARCH ACTIONS
export const FETCH_ALLMERCHANTS_SUCCESS = 'FETCH_ALLMERCHANTS_SUCCESS';
export const FETCH_ALLMERCHANTS_FAILURE = 'FETCH_ALLMERCHANTS_FAILURE';
export const FETCH_MERCHANT_SEARCH_SUCCESS = 'FETCH_MERCHANT_SEARCH_SUCCESS';
export const FETCH_MERCHANT_SEARCH_FAILURE = 'FETCH_MERCHANT_SEARCH_FAILURE';
// PRODUCT SEARCH ACTIONS
export const FETCH_ALLPRODUCTS_SUCCESS = 'FETCH_ALLPRODUCTS_SUCCESS';
export const FETCH_ALLPRODUCTS_FAILURE = 'FETCH_ALLPRODUCTS_FAILURE';
export const FETCH_PRODUCT_SEARCH_SUCCESS = 'FETCH_PRODUCT_SEARCH_SUCCESS';
export const FETCH_PRODUCT_SEARCH_FAILURE = 'FETCH_PRODUCT_SEARCH_FAILURE';
export const SEARCH_MIXED_SUCCESS = 'SEARCH_MIXED_SUCCESS';
export const SEARCH_MIXED_FAILURE = 'SEARCH_MIXED_FAILURE';

// STREAM SEARCH ACTIONS CREATORS
export const fetchAllStreams = () => (dispatch) => {
  axios.get('/api/search/allStreams')
    .then(res => dispatch({
      type: FETCH_ALLSTREAMS_SUCCESS,
      allStreamsSearch: res.data,
    }), err => dispatch({
      type: FETCH_ALLSTREAMS_FAILURE,
      error: err,
    }));
};

export const fetchStreamSearch = term => (dispatch) => {
  axios.get(`/api/search/streams/${term}`)
    .then(res => dispatch({
      type: FETCH_STREAM_SEARCH_SUCCESS,
      streamsSearch: res.data,
    }), err => dispatch({
      type: FETCH_STREAM_SEARCH_FAILURE,
      error: err,
    }));
};

// MERCHANT SEARCH ACTIONS CREATORS
export const searchAllMerchants = () => (dispatch) => {
  axios.get('/api/search/allMerchants')
    .then(res => dispatch({
      type: FETCH_ALLMERCHANTS_SUCCESS,
      allMerchantsSearch: res.data,
    }), err => dispatch({
      type: FETCH_ALLMERCHANTS_FAILURE,
      error: err,
    }));
};

export const fetchMerchantSearch = term => (dispatch) => {
  axios.get(`/api/search/merchants/${term}`)
    .then(res => dispatch({
      type: FETCH_MERCHANT_SEARCH_SUCCESS,
      merchantsSearch: res.data,
    }), err => dispatch({
      type: FETCH_MERCHANT_SEARCH_FAILURE,
      error: err,
    }));
};

// PRODUCT SEARCH ACTIONS CREATORS
export const searchAllProducts = () => (dispatch) => {
  axios.get('/api/search/allProducts')
    .then(res => dispatch({
      type: FETCH_ALLPRODUCTS_SUCCESS,
      allProductsSearch: res.data,
    }), err => dispatch({
      type: FETCH_ALLPRODUCTS_FAILURE,
      error: err,
    }));
};

export const fetchProductSearch = term => (dispatch) => {
  axios.get(`/api/search/products/${term}`)
    .then(res => dispatch({
      type: FETCH_PRODUCT_SEARCH_SUCCESS,
      productsSearch: res.data,
    }), err => dispatch({
      type: FETCH_PRODUCT_SEARCH_FAILURE,
      error: err,
    }));
};

export const searchMixed = term => (dispatch) => {
  axios.get(`/api/search/${term}`)
    .then(res => dispatch({
      type: SEARCH_MIXED_SUCCESS,
      productsSearch: res.data,
    }), err => dispatch({
      type: SEARCH_MIXED_FAILURE,
      error: err,
    }));
};
