export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const follow = product => (dispatch) => {
  axios.post('/api/products', product)
    .then(res => dispatch({
      type: FOLLOW_SUCCESS,
      product: res.data,
    }))
    .catch(err => dispatch({
      type: FOLLOW_FAILURE,
      error: err,
    }));
};

export const unfollow = product => (dispatch) => {
  axios.delete('/api/products', { data: product })
    .then(res => dispatch({
      type: UNFOLLOW_SUCCESS,
      products: res.data,
    }))
    .catch(err => dispatch({
      type: UNFOLLOW_FAILURE,
      error: err,
    }));
};