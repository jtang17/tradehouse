import {
  FETCH_MERCHANT_SUCCESS,
  FETCH_MERCHANT_FAILURE,
} from '../actions/merchantActions.jsx';

export function merchantInfo(state = {}, action) {
  switch (action.type) {
    case FETCH_MERCHANT_SUCCESS: {
      return action.merchantInfo;
    }
    case FETCH_MERCHANT_FAILURE: {
      console.error(action.error);
      return state;
    }
    default: {
      return state;
    }
  }
}
