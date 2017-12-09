import './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { devToolsEnhancer } from 'redux-devtools-extension';

import Root from './components/Root.jsx';
import products from './reducers/reducers.jsx';

var defaultState = {
  products: {
    items: []
  }
};

const store = createStore(products, defaultState, devToolsEnhancer());

ReactDOM.render(<Root store={store} />, document.getElementById('app'));
