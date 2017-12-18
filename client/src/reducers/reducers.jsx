import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// reducers
import { broadcastMessage, featuredProduct, video } from './broadcastReducers.jsx';
import { cart } from './cartReducers.jsx';
import { products, merchantProducts, singleProduct } from './productReducers.jsx';
import { customerInfo, allMerchants } from './customerReducers.jsx';
import { merchantInfo } from './merchantReducers.jsx';

const tradehouseApp = combineReducers({
  allMerchants,
  cart,
  products,
  merchantProducts,
  singleProduct,
  video,
  broadcastMessage,
  featuredProduct,
  form: formReducer,
  customerInfo,
  merchantInfo,
});

export default tradehouseApp;
