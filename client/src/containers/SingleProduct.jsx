import React from 'react';
import { connect } from 'react-redux';

import { addToCart, removeFromCart, increaseQuantityInCart, decreaseQuantityInCart } from '../actions/cartActions.jsx';
import { fetchSingleProduct } from '../actions/productActions.jsx';

import Cart from './Cart.jsx';

// TODO: BUILD SINGLE PRODUCT VIEW

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.productId);
    // fetch information of specific product
  }

  handleAddClick() {
    this.props.addToCart(this.props.product);
    // add product from single product view to current customer's cart
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <Cart />
        {product.title} - {product.quantity} remaining<br />
        ${parseFloat(product.unitPrice).toFixed(2)}<br />
        {product.description}<br />
        <button onClick={this.props.addToCart.bind(null, this.props.product)}>
          Add to Cart
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  product: state.singleProduct,
});

const mapDispatchToProps = {
  fetchSingleProduct, addToCart, removeFromCart, increaseQuantityInCart, decreaseQuantityInCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
