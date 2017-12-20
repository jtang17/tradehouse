import {
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
  FETCH_SUBSCRIPTIONS_SUCCESS,
  FETCH_SUBSCRIPTIONS_FAILURE,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAILURE,
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

export function subscriptions(state = [], action) {
  switch (action.type) {
    case FETCH_SUBSCRIPTIONS_SUCCESS: {
      return action.subscriptions;
    }
    case FETCH_SUBSCRIPTIONS_FAILURE: {
      console.error(action.error);
      return state;
    }
    case FOLLOW_SUCCESS: {
      return action.subscriptions;
    }
    case FOLLOW_FAILURE: {
      console.error(action.error);
      return state;
    }
    case UNFOLLOW_SUCCESS: {
      return action.subscriptions;
    }
    case UNFOLLOW_FAILURE: {
      console.error(action.error);
      return state;
    }
    default: {
      return state;
    }
  }
}