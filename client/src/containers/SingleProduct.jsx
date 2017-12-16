import React from 'react';
import { connect } from 'react-redux';

import { addToCart, removeFromCart } from '../actions/cartActions.jsx';
import { fetchSingleProduct } from '../actions/productActions.jsx';

import Cart from '../components/customer/Cart.jsx';

// TODO: BUILD SINGLE PRODUCT VIEW

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleProduct(2);
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
        <Cart
          cart={this.props.cart}
          removeFromCart={this.props.removeFromCart}
        />
        {product.title} - {product.quantity} remaining<br />
        {product.unitPrice}<br />
        {product.description}<br />
        <button onClick={this.handleAddClick}>Add to Cart</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  product: state.singleProduct,
});

export default connect(mapStateToProps, { addToCart, fetchSingleProduct, removeFromCart })(SingleProduct);
