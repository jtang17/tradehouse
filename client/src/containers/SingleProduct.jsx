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
      <div className="singleProduct__container">
        <h3 className="heading">{product.title}</h3>
        <div>{product.imageUrl && <img src={`${product.imageUrl}`} style={{ width: '200px' }} />}</div>
        <br />
        <h6>Description: {product.description}</h6>
        <h6>Price: ${parseFloat(product.unitPrice).toFixed(2)}</h6>
        <h6>In Stock: {product.quantity} remaining</h6>
        {(this.props.customerInfo && this.props.customerInfo.id) ? (
          <div>
            <a className="btn--filter" onClick={this.props.addToCart.bind(null, this.props.product, this.props.customerInfo.id)}>Add to Cart</a>

            <a className="btn--filter" onClick={this.props.addWishlistedProduct.bind(null, this.props.customerInfo.id, this.props.product)}>Add to Wish List</a>
            <a className="btn--filter" onClick={this.props.removeWishlistedProduct.bind(null, this.props.customerInfo.id, this.props.product)}>Remove from Wishlist</a>
          </div>
          ) : (
            <div> Please log in to shop </div>
          )}
        <h3 className="sub-heading">Shipping Details:</h3>
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
