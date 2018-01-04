import axios from 'axios';

export const FETCH_ALL_STREAMS_SUCCESS = 'FETCH_ALL_STREAMS_SUCCESS';
export const FETCH_ALL_STREAMS_FAILURE = 'FETCH_ALL_STREAMS_FAILURE';

export const fetchAllStreams = () => (dispatch) => {
  axios.get('/api/streams')
    .then(res => dispatch({
      type: FETCH_ALL_STREAMS_SUCCESS,
      streams: res.data,
    }), err => dispatch({
      type: FETCH_ALL_STREAMS_FAILURE,
      error: err,
    }));
};
