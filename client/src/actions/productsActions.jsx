import axios from 'axios';

export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

export const addProduct = product => (dispatch) => {
  axios.post('/api/products', product)
    .then(res => dispatch({
      type: ADD_PRODUCT_SUCCESS,
      product: res.data,
    }))
    .catch(err => dispatch({
      type: ADD_PRODUCT_FAILURE,
      error: err,
    }));
};

export const deleteProduct = (product) => (dispatch) => {
    axios.delete('/api/products', { data: product })
      .then(res => dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        items: res.data,
      }))
      .catch(err => dispatch({
        type: DELETE_PRODUCT_FAILURE,
        error: err,
      }));
};
