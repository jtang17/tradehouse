import React from 'react';
import { connect } from 'react-redux';

import { addToCart, removeFromCart, increaseQuantityInCart, decreaseQuantityInCart } from '../actions/cartActions.jsx';
import { fetchSingleProduct } from '../actions/productActions.jsx';
import { fetchCustomerInfoByToken } from '../actions/customerActions.jsx';

import Cart from './Cart.jsx';

// TODO: BUILD SINGLE PRODUCT VIEW

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCustomerInfoByToken();
    this.props.fetchSingleProduct(this.props.match.params.productId);
    // fetch information of specific product
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <Cart />
        {product.title} - {product.quantity} remaining<br />
        ${parseFloat(product.unitPrice).toFixed(2)}<br />
        {product.description}<br />
        <button onClick={this.props.addToCart.bind(null, this.props.product, this.props.customerInfo.id)}>
          Add to Cart
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customerInfo: state.customerInfo,
  cart: state.cart,
  product: state.singleProduct,
});

const mapDispatchToProps = {
  fetchSingleProduct, addToCart, removeFromCart, increaseQuantityInCart, decreaseQuantityInCart, fetchCustomerInfoByToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
