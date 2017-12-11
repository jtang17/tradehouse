import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.jsx';
import CustomerView from './CustomerView.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/customerView" component={CustomerView} />
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
