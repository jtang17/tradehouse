import { combineReducers } from 'redux';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  CLEAR_PRODUCT
} from '../actions/actions.jsx'

const productList = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      var newState = Object.assign({}, state);

      newState.products.items.push({
        productName: action.productName,
      });

      return newState;

    case 'DELETE_PRODUCT':
      var items = [].concat(state.products.items);

      items.splice(action.index, 1);

      return Object.assign({}, state, {
        products: {
          items: items
        }
      });

    case 'CLEAR_PRODUCT':
      return Object.assign({}, state, {
        products: {
          items: []
        }
      });

    default:
      return state;
  }
}

export default productList;