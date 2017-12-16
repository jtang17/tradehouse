import React from 'react';
import AddProductForm from '../components/products/AddProductForm.jsx';
import ProductList from '../components/products/ProductList.jsx';
import { connect } from 'react-redux';
import { addProduct, deleteProduct, fetchAllProducts } from '../actions/productActions.jsx';
import { Redirect } from 'react-router';
import { Auth } from '../Auth/Auth.js';

const auth = new Auth();

class ProductsView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
    //Should fetch this merchant's products only
    //this.props.fetchProducts(id);
  }

  render() {
    // redirect to home if not logged in, shouldn't be here
    if (!auth.isAuthenticated()) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <AddProductForm
          addProduct={this.props.addProduct}
        />
        <ProductList
          products={this.props.products}
          deleteProduct={this.props.deleteProduct}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps, { addProduct, deleteProduct, fetchAllProducts })(ProductsView);
