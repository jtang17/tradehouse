import {
  EDIT_MERCHANT_PROFILE_SUCCESS,
  EDIT_MERCHANT_PROFILE_FAILURE,
  FETCH_MERCHANT_SUCCESS,
  FETCH_MERCHANT_FAILURE,
  FETCH_ALL_MERCHANTS_SUCCESS,
  FETCH_ALL_MERCHANTS_FAILURE,
  FETCH_CHANNEL_SUCCESS,
  FETCH_CHANNEL_FAILURE,
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
    case EDIT_MERCHANT_PROFILE_SUCCESS: {
      return action.merchantInfo;
    }
    case EDIT_MERCHANT_PROFILE_FAILURE: {
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

export function channelInfo(state = {}, action) {
  switch (action.type) {
    case FETCH_CHANNEL_SUCCESS: {
      return action.channelInfo;
    }
    case FETCH_CHANNEL_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
