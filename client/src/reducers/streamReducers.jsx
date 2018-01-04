import {
  FETCH_ALL_STREAMS_SUCCESS,
  FETCH_ALL_STREAMS_FAILURE,
} from '../actions/streamActions.jsx';

export function streams(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_STREAMS_SUCCESS: {
      return action.streams;
    }
    case FETCH_ALL_STREAMS_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
