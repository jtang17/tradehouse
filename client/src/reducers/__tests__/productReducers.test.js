import * as actions from '../../actions/productActions.jsx';

import { merchantProducts } from '../productReducers.jsx';

describe('tests for product reducers', () => {
  it('should successfully add a product to the store', () => {
    const addProductSuccess = {
      type: actions.ADD_MERCHANT_PRODUCT_SUCCESS,
      product: 'Yellow Sweatshirt',
    };
    expect(merchantProducts([], addProductSuccess)).toEqual(['Yellow Sweatshirt']);
  });
  it('should fail adding a product to the store', () => {
    const addProductFail = {
      type: actions.ADD_MERCHANT_PRODUCT_FAILURE,
      product: 'Yellow Sweatshirt',
    };
    expect(merchantProducts([], addProductFail)).toEqual([]);
  });
  it('should fail deleting a product to the state', () => {
    const deleteProductFail = {
      type: actions.DELETE_MERCHANT_PRODUCT_FAILURE,
      product: 'Yellow Sweatshirt',
    };
    expect(merchantProducts([], deleteProductFail)).toEqual([]);
  });
  it('should fail fetching all products from the store', () => {
    const fetchProductFail = {
      type: actions.FETCH_ALL_PRODUCTS_FAILURE,
      product: 'Yellow Sweatshirt',
    };
    expect(merchantProducts([], fetchProductFail)).toEqual([]);
  });
  it('should fail fetching a single merchants product from the store', () => {
    const fetchMercProductFail = {
      type: actions.FETCH_MERCHANT_PRODUCTS_FAILURE,
      product: 'Yellow Sweatshirt',
    };
    expect(merchantProducts([], fetchMercProductFail)).toEqual([]);
  });
  it('should fail fetching a single product from the store', () => {
    const fetchSingleProductFail = {
      type: actions.FETCH_SINGLE_PRODUCT_FAILURE,
      product: 'Yellow Sweatshirt',
    };
    expect(merchantProducts([], fetchSingleProductFail)).toEqual([]);
  });
});
