import { cart } from '../cartReducers.jsx';
import { TEST_ADD } from '../../actions/cartActions.jsx';

// TODO: Test async actions when they are ready.

describe('cart reducers', () => {
  it('should return initial state', () => {
    expect(cart(null, {})).toBe(null);
  });
  it('TEST_ADD should add a product to the state', () => {
    expect(cart(['cheese'], {type: TEST_ADD, product: 'cake'}).length).toBe(2);
  });
  it('TEST_ADD does not mutate original state', () => {
    let originalState = ['chips'];
    cart(originalState, {type: TEST_ADD, product: 'cake'});
    expect(originalState.length).toBe(1);
  });
})