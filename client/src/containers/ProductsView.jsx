import React from 'react';
import AddProductForm from '../components/products/AddProductForm.jsx';
import ProductList from '../components/products/ProductList.jsx';
import { connect } from 'react-redux';
import { addProduct, deleteProduct, fetchAllProducts } from '../actions/productActions.jsx';
import { fetchMerchantInfo } from '../actions/merchantActions.jsx';
import { Redirect } from 'react-router';
import { Auth } from '../Auth/Auth.js';

const auth = new Auth();

class ProductsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addProduct: false,
    };

    this.showAddProduct = this.showAddProduct.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
    // Should fetch this merchant's products only
    // this.props.fetchProducts(id);
  }

  showAddProduct() {
    this.setState({
      addProduct: !this.state.addProduct,
    });
  }

  render() {
    // redirect to home if not logged in, shouldn't be here
    if (!auth.isAuthenticated()) {
      return <Redirect to="/" />;
    }

    return (
      <div className="mercStore__container clear">
        <h3>{this.props.merchantInfo.storeName || 'Alex\'s Inventory' }</h3>
        <a className="btn--action" onClick={this.showAddProduct}>Add New Product</a>
        {this.state.addProduct && <AddProductForm
          addProduct={this.props.addProduct}
        />}
        <ProductList
          className="products__table"
          products={this.props.products}
          deleteProduct={this.props.deleteProduct}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  merchantInfo: state.merchantInfo,
});

export default connect(mapStateToProps, { addProduct, deleteProduct, fetchAllProducts, fetchMerchantInfo })(ProductsView);
