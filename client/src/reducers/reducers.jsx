import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// reducers
import { broadcastMessage, featuredProduct, stream } from './broadcastReducers.jsx';
import { cart } from './cartReducers.jsx';
import { allProducts, products, merchantProducts, singleProduct } from './productReducers.jsx';
import { customerInfo, subscriptions, wishlist } from './customerReducers.jsx';
import { merchantInfo, allMerchants, streamInfo } from './merchantReducers.jsx';

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
  wishlist,
  subscriptions,
  customerInfo,
  merchantInfo,
  streamInfo,
});

export default tradehouseApp;
