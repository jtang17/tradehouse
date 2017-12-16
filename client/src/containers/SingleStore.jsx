import React from 'react';
import { connect } from 'react-redux';

import Cart from '../components/customer/Cart.jsx';
import StoreItem from '../components/customer/StoreItem.jsx';

import { fetchAllProducts } from '../actions/productActions.jsx';
import { addToCart, fetchCart, removeFromCart } from '../actions/cartActions.jsx';


class SingleStore extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
    // TODO: should fetchProducts of one particular merchant
    // TODO: should fetchMerchantInfo of one particular merchant

    this.props.fetchCart();
    // TODO: should fetch cart of customer
  }

  render() {
    return (
      <div className="singleStore">
        <div className="storeHeader">
          <h4>Store Page: Hardcoded Merchant Name</h4>
          An avid cheese seller
        </div>
        <div className="storeProductList">
          <h4>Products:</h4>
          {this.props.products.map((product, index) => <StoreItem key={index} product={product} addToCart={this.props.addToCart} cart={this.props.cart} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = {
  fetchAllProducts, addToCart, fetchCart, removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStore);
