import { combineReducers } from 'redux';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  CLEAR_PRODUCTS
} from '../actions/actions.jsx'

function products(
  state = {
    products: {
      items: []
    }
  },
  action
) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        products: {
          items: [...state.products.items, action.product]
        }
      };

    case 'DELETE_PRODUCT':
      var items = [].concat(state.products.items);
      var index = action.index;
      items.splice(index, 1);

      return {
        products: {
          items: items
        }
      };

    case 'CLEAR_PRODUCTS':
      return {
        products: {
          items: []
        }
      };

    default:
      return state;
  }
}

//combineReducers is not working properly yet
const reducer = combineReducers({
  products
});
console.log(reducer);

//export default reducer
export default products;
