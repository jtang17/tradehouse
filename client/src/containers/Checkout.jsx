import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../components/customer/CartItem.jsx';
import { removeFromCart, fetchCart, decreaseQuantityInCart, increaseQuantityInCart } from '../actions/cartActions.jsx';
import { fetchCustomerInfoByToken } from '../actions/customerActions.jsx';

class CheckoutView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCustomerInfoByToken()
      .then(() => this.props.fetchCart(this.props.customerInfo.id))
  }

  render() {
    let totalCost = 0;
    this.props.cart.forEach((item) => {
      totalCost += item.quantity * item.unitPrice;
    });
    return (
      <div>
        Current Cart: {this.props.cart.map((product, index) => (<CartItem product={product} key={index} removeFromCart={this.props.removeFromCart} increaseQuantityInCart={this.props.increaseQuantityInCart} decreaseQuantityInCart={this.props.decreaseQuantityInCart} customerId={this.props.customerInfo.id} />))}
        Total Price: ${parseFloat(totalCost).toFixed(2)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  customerInfo: state.customerInfo,
});

const mapDispatchToProps = {
  removeFromCart, fetchCart, decreaseQuantityInCart, increaseQuantityInCart, fetchCustomerInfoByToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutView);
