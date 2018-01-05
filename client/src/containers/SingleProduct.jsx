import React from 'react';
import { connect } from 'react-redux';

import { addToCart, removeFromCart, increaseQuantityInCart, decreaseQuantityInCart } from '../actions/cartActions.jsx';
import { fetchSingleProduct } from '../actions/productActions.jsx';
import { fetchCustomerInfoByToken, fetchWishlist, addWishlistedProduct, removeWishlistedProduct } from '../actions/customerActions.jsx';

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCustomerInfoByToken()
      .then(() => this.props.fetchWishlist(this.props.customerInfo.id));
    this.props.fetchSingleProduct(this.props.match.params.productId);
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <img src={`${product.imageUrl}`} style={{width: '200px'}} />
        <br />
        <h5>{product.title}</h5>
        {product.quantity} remaining<br />
        ${parseFloat(product.unitPrice).toFixed(2)}<br />
        {product.description}<br />
        {(this.props.customerInfo && this.props.customerInfo.id) ? (
          <div>
            <button onClick={this.props.addToCart.bind(null, this.props.product, this.props.customerInfo.id)}>Add to Cart</button>
            <br />
            <button onClick={this.props.addWishlistedProduct.bind(null, this.props.customerInfo.id, this.props.product)}>Add to Wish List</button>
            <button onClick={this.props.removeWishlistedProduct.bind(null, this.props.customerInfo.id, this.props.product)}>Remove from Wishlist</button>
          </div>
          ) : (
            <div> Please log in to shop </div>
          )}
        <h3>Shipping Details:</h3>
        <p>Please contact merchant regarding shipping details.</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wishlist: state.wishlist,
  customerInfo: state.customerInfo,
  product: state.singleProduct,
});

const mapDispatchToProps = {
  fetchSingleProduct, addToCart, removeFromCart, increaseQuantityInCart, decreaseQuantityInCart, fetchCustomerInfoByToken, fetchWishlist, addWishlistedProduct, removeWishlistedProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
