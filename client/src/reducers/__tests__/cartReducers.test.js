import { cart } from '../cartReducers.jsx';

// TODO: Test async actions when they are ready.

describe('cart reducers', () => {
  it('should return initial state', () => {
    expect(cart(null, {})).toBe(null);
  });
})