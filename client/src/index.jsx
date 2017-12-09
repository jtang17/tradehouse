import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AddProductForm from './components/AddProductForm.jsx';
import ProductList from './components/ProductList.jsx';
import productList from './reducers/reducers.jsx';

var defaultState = {
  products: {
    items: []
  }
};

const store = createStore(productList, defaultState);

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Product List</h1>
        <AddProductForm />
        <ProductList />
          <iframe width="560" height="315"
              src="https://www.youtube.com/embed/live_stream?channel=UCSJ4gkVC6NrvII8umztf0Ow&autoplay=1"
              frameBorder="0"
              allowFullScreen>
          </iframe>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app'));