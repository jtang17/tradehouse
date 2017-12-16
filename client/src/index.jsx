import './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import tradehouseApp from './reducers/reducers.jsx';

import { Provider } from 'react-redux';

import { Auth } from './Auth/Auth';
import Home from './containers/Home.jsx';
import Header from './components/common/Header.jsx';
import Sidebar from './containers/Sidebar.jsx';
import Footer from './components/common/Footer.jsx';
import ChannelView from './containers/ChannelView.jsx';
import ProductsView from './containers/ProductsView.jsx';
import MerchantHome from './containers/MerchantHome.jsx';
import BroadcastView from './containers/BroadcastView.jsx';
import StoreView from './containers/StoreView.jsx';
import CustomerHome from './containers/CustomerHome.jsx';
import Checkout from './containers/Checkout.jsx';
import Browser from './containers/Browser.jsx';
import SingleProduct from './containers/SingleProduct.jsx';
import RouteNotFound from './components/common/RouteNotFound.jsx';

const defaultState = {
  broadcastMessage: '',
  singleProduct: {},
  merchantProducts: [],
  products: [],
  cart: [],
  video: '',
  featuredProduct: {},
};

const store = createStore(tradehouseApp, defaultState, composeWithDevTools(applyMiddleware(thunk)));
const auth = new Auth();
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="app__container">
        <Header />
        <div className="mainContent__container">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/channel/:merchantId" component={ChannelView} />
            <Route path="/manage_store/:merchantId" component={ProductsView} />
            <Route path="/merchant_profile/:merchantId" component={MerchantHome} />
            <Route path="/broadcast/:merchantId" component={BroadcastView} />
            <Route path="/store/:merchantId" component={StoreView} />
            <Route path="/customer_profile/:customerId" component={CustomerHome} />
            <Route path="/checkout/:customerId" component={Checkout} />
            <Route path="/browse" component={Browser} />
            <Route path="/product/:productId" component={SingleProduct} />
            <RouteNotFound />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

ReactDOM.render(<Root store={store} />, document.getElementById('app'));
