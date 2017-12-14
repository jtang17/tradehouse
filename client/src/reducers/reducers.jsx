import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//reducers
import { broadcastMessage, featuredProduct, video } from './broadcastReducers.jsx';
import { items } from './productReducers.jsx';
import { customerInfo } from './customerReducers.jsx';
import { merchantInfo } from './merchantReducers.jsx';

const tradehouseApp = combineReducers({
  items,
  video,
  broadcastMessage,
  featuredProduct,
  form: formReducer,
  customerInfo,
  merchantInfo,
});

export default tradehouseApp;
