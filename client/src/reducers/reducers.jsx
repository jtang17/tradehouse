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
      var newState = Object.assign({}, state);
      newState.products.items.push(action.product);
      console.log('newState:', newState);
      return newState;

    case 'DELETE_PRODUCT':
      var items = [].concat(state.products.items);

      items.splice(action.index, 1);

      return Object.assign({}, state, {
        products: {
          items: items
        }
      });

    case 'CLEAR_PRODUCTS':
      return Object.assign({}, state, {
        products: {
          items: []
        }
      });

    default:
      return state;
  }
}

//combineReducers is not working properly yet
const reducer = combineReducers({
  products
});

//export default reducer
export default products;
