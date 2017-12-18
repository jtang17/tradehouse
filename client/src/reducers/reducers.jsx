import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// reducers
import { broadcastMessage, featuredProduct, stream } from './broadcastReducers.jsx';
import { cart } from './cartReducers.jsx';
import { allProducts, products, merchantProducts, singleProduct } from './productReducers.jsx';
import { customerInfo } from './customerReducers.jsx';
import { merchantInfo, allMerchants } from './merchantReducers.jsx';

const tradehouseApp = combineReducers({
  allMerchants,
  allProducts,
  cart,
  products,
  merchantProducts,
  singleProduct,
  stream,
  broadcastMessage,
  featuredProduct,
  form: formReducer,
  customerInfo,
  merchantInfo,
});

export default tradehouseApp;
