import {
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
  FETCH_ALL_MERCHANTS_SUCCESS,
  FETCH_ALL_MERCHANTS_FAILURE
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

export function allMerchants(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_MERCHANTS_SUCCESS: {
      return action.allMerchants;
    }
    case FETCH_ALL_MERCHANTS_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
