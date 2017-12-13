import './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import tradehouseApp from './reducers/reducers.jsx';

import { Provider } from 'react-redux';

import Home from './containers/Home.jsx';
import Header from './components/Header.jsx';
import CustomerView from './containers/CustomerView.jsx';
import ProductsView from './containers/ProductsView.jsx';
import MerchantHome from './containers/MerchantHome.jsx';
import BroadcastView from './containers/BroadcastView.jsx';

var defaultState = {
  broadcastMessage: '',
  items: [],
  video: '',
  featuredProduct: {},
};

const store = createStore(tradehouseApp, defaultState, composeWithDevTools(applyMiddleware(thunk)));

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route path="/CustomerView" component={CustomerView} />
        <Route path="/ProductsView" component={ProductsView} />
        <Route path="/MerchantHome" component={MerchantHome} />
        <Route path="/BroadcastView" component={BroadcastView} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

ReactDOM.render(<Root store={store} />, document.getElementById('app'));
