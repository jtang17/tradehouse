import {
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
} from '../actions/customerActions.jsx';

export function customerInfo(state = {}, action) {
  switch (action.type) {
    case FETCH_CUSTOMER_SUCCESS: {
      return action.customerInfo;
    }
    case FETCH_CUSTOMER_FAILURE: {
      console.error(action.error);
      return state;
    }
    default: {
      return state;
    }
  }
}
