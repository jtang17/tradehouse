import {
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
  FETCH_WISHLIST_SUCCESS,
  FETCH_WISHLIST_FAILURE,
  ADD_WISHLISTED_PRODUCT_SUCCESS,
  ADD_WISHLISTED_PRODUCT_FAILURE,
  REMOVE_WISHLISTED_PRODUCT_SUCCESS,
  REMOVE_WISHLISTED_PRODUCT_FAILURE,
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
      return state;
    }
    default: {
      return state;
    }
  }
}

export function wishlist(state = [], action) {
  switch (action.type) {
    case FETCH_WISHLIST_SUCCESS: {
      return action.wishlist;
    }
    case FETCH_WISHLIST_FAILURE: {
      return state;
    }
    case ADD_WISHLISTED_PRODUCT_SUCCESS: {
      return action.wishlist;
    }
    case ADD_WISHLISTED_PRODUCT_FAILURE: {
      return state;
    }
    case REMOVE_WISHLISTED_PRODUCT_SUCCESS: {
      return action.wishlist;
    }
    case REMOVE_WISHLISTED_PRODUCT_FAILURE: {
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
      return state;
    }
    case FOLLOW_SUCCESS: {
      return action.subscriptions;
    }
    case FOLLOW_FAILURE: {
      return state;
    }
    case UNFOLLOW_SUCCESS: {
      return action.subscriptions;
    }
    case UNFOLLOW_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
