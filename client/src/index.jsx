import './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import Root from './components/Root.jsx';
import tradehouseApp from './reducers/reducers.jsx';

var defaultState = {
  products: {
    items: []
  }
};

const store = createStore(tradehouseApp, defaultState, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Root store={store} />, document.getElementById('app'));
