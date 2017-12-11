export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product: product,
  };
}

export const deleteProduct = (index) => {
  return {
    type: DELETE_PRODUCT,
    index: index
  };
}

export const clearProducts = () => {
  return {
    type: CLEAR_PRODUCTS
  };
}

export const fetchProducts = (url = '/api/products') => {
  return dispatch => {
    axios.get(url)
      .then((res) => {
        return dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          data: res.data
        })
      })
      .catch((err) => {
        return dispatch({
          type: FETCH_PRODUCTS_FAILURE,
          error: err
        })
      })
  }
}
