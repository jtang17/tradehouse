import React from 'react';
import AddProductForm from './AddProductForm.jsx';
import ProductList from './ProductList.jsx';
import Header from './Header.jsx';

import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <Header />
        <AddProductForm />
        <ProductList items={this.props.items} />
      </div>
    )
  }
}

export default App;
