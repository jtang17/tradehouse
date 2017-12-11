import './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import Root from './components/Root.jsx';
import reducer from './reducers/reducers.jsx';

var defaultState = {
  products: {
    items: []
  }
};

const store = createStore(reducer, defaultState, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Root store={store} />, document.getElementById('app'));
