import * as actions from '../../actions/productActions.jsx';

import { products } from '../productReducers.jsx';

describe('tests for product reducers', () => {


	it('should sucessfully add a product to the store', () => {
		const addProductSuccess = {
			type: actions.ADD_PRODUCT_SUCCESS,
			product: 'Yellow Sweatshirt',
		};
		expect(products([], addProductSuccess)).toEqual(['Yellow Sweatshirt']);
	});
	it('should fail adding a product to the store', () => {
		const addProductFail = {
			type: actions.ADD_PRODUCT_FAILURE,
			product: 'Yellow Sweatshirt',
		};
		expect(products([], addProductFail)).toEqual([]);
	});
	it('should fail deleting a product to the state', () => {
		const deleteProductFail = {
			type: actions.DELETE_PRODUCT_FAILURE,
			product: 'Yellow Sweatshirt',
		};
		expect(products([], deleteProductFail)).toEqual([]);
	});
	it('should fail fetching all products from the store', () => {
		const fetchProductFail = {
			type: actions.FETCH_ALL_PRODUCT_FAILURE,
			product: 'Yellow Sweatshirt',
		};
		expect(products([], fetchProductFail)).toEqual([]);
	});
	it('should fail fetching a single merchants product from the store', () => {
		const fetchMercProductFail = {
			type: actions.FETCH_MERCHANT_PRODUCTS_FAILURE,
			product: 'Yellow Sweatshirt',
		};
		expect(products([], fetchMercProductFail)).toEqual([]);
	});
	it('should fail fetching a single product from the store', () => {
		const fetchSingleProductFail = {
			type: actions.FETCH_SINGLE_PRODUCT_FAILURE,
			product: 'Yellow Sweatshirt',
		};
		expect(products([], fetchSingleProductFail)).toEqual([]);
	});
});