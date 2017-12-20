import * as actions from '../../actions/cartActions.jsx';

import { cart } from '../cartReducers.jsx';

// TODO: Test async actions when they are ready.

describe('cart reducers', () => {
  it('should return initial state', () => {
    expect(cart(null, {})).toBe(null);
  });

  it('failing to add an item to the cart should return initial cart state', () => {
  	const addToCartFail = {
  		type: actions.ADD_TO_CART_FAILURE
  	}
  	expect(cart(['sweater'], addToCartFail)).toEqual(['sweater']);
  });

  it('failing to remove an item from the cart should return initial cart state', () => {
  	const removeFromCartFail = {
  		type: actions.REMOVE_FROM_CART_FAILURE
  	}
  	expect(cart(['sweater'], removeFromCartFail)).toEqual(['sweater']);
  });

  it('failing to fetch an item from the cart should return initial cart state', () => {
  	const fetchFromCartFail = {
  		type: actions.FETCH_CART_FAILURE
  	}
  	expect(cart(['sweater'], fetchFromCartFail)).toEqual(['sweater']);
  });

  it('failing to decrease quantity from the cart should return initial cart state', () => {
  	const fetchFromCartFail = {
  		type: actions.FETCH_CART_FAILURE
  	}
  	expect(cart(['sweater'], {type: actions.FETCH_CART_FAILURE})).toEqual(['sweater']);
  });
})