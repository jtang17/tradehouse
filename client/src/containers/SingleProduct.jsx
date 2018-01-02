import React from 'react';
import { connect } from 'react-redux';

import { addToCart, removeFromCart, increaseQuantityInCart, decreaseQuantityInCart } from '../actions/cartActions.jsx';
import { fetchSingleProduct } from '../actions/productActions.jsx';
import { fetchCustomerInfoByToken } from '../actions/customerActions.jsx';

import Cart from './Cart.jsx';

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCustomerInfoByToken();
    this.props.fetchSingleProduct(this.props.match.params.productId);
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        {product.title} - {product.quantity} remaining<br />
        ${parseFloat(product.unitPrice).toFixed(2)}<br />
        {product.description}<br />
        {(this.props.customerInfo && this.props.customerInfo.id) ? (
          <div>
            <button onClick={this.props.addToCart.bind(null, this.props.product, this.props.customerInfo.id)}>Add to Cart</button>
            <button>Add to Wish List</button>
            <button>Review</button>
          </div>
          ) : (
            <div> Please log in to shop </div>
          )}
        <h3>Shipping Details:</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.</p>
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
