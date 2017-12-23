import React from 'react';
import AddProductForm from '../components/products/AddProductForm.jsx';
import ProductList from '../components/products/ProductList.jsx';
import { connect } from 'react-redux';
import { addProduct, deleteProduct, fetchMerchantProducts } from '../actions/productActions.jsx';
import { fetchMerchantInfoByToken } from '../actions/merchantActions.jsx';
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
     this.props.fetchMerchantInfoByToken()
      .then(() => this.props.fetchMerchantProducts(this.props.merchantInfo.id));

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
        <h3>{this.props.merchantInfo.storeName}</h3>
        <a className="btn--action" onClick={this.showAddProduct}>Add New Product</a>
        {this.state.addProduct && <AddProductForm
          addProduct={this.props.addProduct}
          merchantId={this.props.merchantInfo.id}
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
  products: state.merchantProducts,
  merchantInfo: state.merchantInfo,
});

const mapDispatchToProps = { addProduct, deleteProduct, fetchMerchantInfoByToken, fetchMerchantProducts };

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);
