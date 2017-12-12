import React from 'react';
import AddProductForm from '../components/AddProductForm.jsx';
import ProductList from '../components/ProductList.jsx';
import { connect } from 'react-redux';
import { addProduct, deleteProduct, fetchProducts } from '../actions/actions.jsx';

import { Redirect } from 'react-router'
import { Auth } from "../Auth/Auth.js";
const auth = new Auth();

class ProductsView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    // redirect to home if not logged in, shouldn't be here
    if (!auth.isAuthenticated()) {
     return <Redirect to="/"/>
    }

    return (
      <div>
        <AddProductForm
          addProduct={this.props.addProduct}
        />
        <ProductList
          products={this.props.items}
          deleteProduct={this.props.deleteProduct}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, { addProduct, deleteProduct, fetchProducts })(ProductsView);
