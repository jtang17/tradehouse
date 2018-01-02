import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CartItem from '../components/customer/CartItem.jsx';
import { removeFromCart, fetchCart, decreaseQuantityInCart, increaseQuantityInCart } from '../actions/cartActions.jsx';
import { fetchCustomerInfoByToken } from '../actions/customerActions.jsx';

import { connect } from 'react-redux';

// TODO: Refactor to use a cart icon with total quantity number next to it
class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let totalCost = 0;
    let totalQuantity = 0;
    this.props.cart.forEach((item) => {
      totalCost += item.quantity * item.unitPrice;
      totalQuantity += item.quantity;
    });
    return (
      <div>
        <ol>
          Items in Cart: {totalQuantity}
          <br />
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

const mapDispatchToProps = {
  removeFromCart, fetchCart, decreaseQuantityInCart, increaseQuantityInCart, fetchCustomerInfoByToken,
};

export default connect(null, mapDispatchToProps)(Cart);
