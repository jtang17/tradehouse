import axios from 'axios';

export const CHANGE_VIDEO = 'CHANGE_VIDEO';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const changeVideo = (video) => {
  return {
    type: CHANGE_VIDEO,
    video: video
  }
}

export const addProduct = (product) => {
  return dispatch => {
    axios.post('/api/products', product)
      .then((res) => {
        return dispatch({
          type: ADD_PRODUCT_SUCCESS,
          product: res.data,
        });
      })
      .catch((err) => {
        return dispatch({
          type: ADD_PRODUCT_FAILURE,
          error: err,
        });
      });
  }
}

export const deleteProduct = (product) => {
  console.log(product);
  // return dispatch => {
  //   axios.delete('/api/products', product)
  //     .then((res) => {
  //       return dispatch({
  //         type: DELETE_PRODUCT_SUCCESS,
  //         product: res.data,
  //       });
  //     })
  //     .catch((err) => {
  //       return dispatch({
  //         type: DELETE_PRODUCT_FAILURE,
  //         error: err,
  //       });
  //     });
  // }
}

export const fetchProducts = (url = '/api/products') => {
  return dispatch => {
    dispatch(fetchProductsLoading(true));
    axios.get(url)
      .then((res) => {
        return dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          items: res.data
        });
      })
      .catch((err) => {
        return dispatch({
          type: FETCH_PRODUCTS_FAILURE,
          error: err
        });
      })
  }
}

export const fetchProductsLoading = (bool) => {
  return {
    type: 'PRODUCTS_LOADING',
    isLoading: bool
  };
}
