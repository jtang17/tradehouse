import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions/cartActions.jsx';
import { fetchSingleProduct } from '../actions/productActions.jsx';

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

export default connect(mapStateToProps, { addToCart, fetchSingleProduct })(SingleProduct);
