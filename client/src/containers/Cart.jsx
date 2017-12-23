import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CartItem from '../components/customer/CartItem.jsx';
import { removeFromCart, fetchCart, decreaseQuantityInCart, increaseQuantityInCart } from '../actions/cartActions.jsx';
import { fetchCustomerInfoByToken } from '../actions/customerActions.jsx';

import { connect } from 'react-redux';

// TODO: pass in customer Id for Link route
class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCustomerInfoByToken();
  }

  render() {
    let totalCost = 0;
    this.props.cart.forEach((item) => {
      totalCost += item.quantity * item.unitPrice;
    });
    return (
      <div>
        <ol>
          Current Cart: {this.props.cart.map((product, index) => (<CartItem product={product} key={index} removeFromCart={this.props.removeFromCart} increaseQuantityInCart={this.props.increaseQuantityInCart} decreaseQuantityInCart={this.props.decreaseQuantityInCart} customerId={this.props.customerId} />))}
          Total Price: ${parseFloat(totalCost).toFixed(2)}
          <br />
          <Link to={`/checkout/${this.props.customerInfo.id}`}>
            <br />
            <button>Checkout</button>
          </Link>
        </ol>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
