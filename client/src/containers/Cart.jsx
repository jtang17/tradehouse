import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/customer/CartItem.jsx';

import { connect } from 'react-redux';

// TODO: pass in customer Id for Link route
class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let totalCost = 0;
    this.props.cart.forEach((item) => {
      totalCost += item.unitPrice;
    });
    return (
      <div>
        <ol>
          Current Cart: {this.props.cart.map((product, index) => {
            return (<CartItem product={product} key={index} removeFromCart={props.removeFromCart} increaseQuantityInCart={props.increaseQuantityInCart} decreaseQuantityInCart={props.decreaseQuantityInCart} />)
          })}
        </ol>
        <br />
        Total Price: ${parseFloat(totalCost).toFixed(2)}
        <Link to={`/checkout/${1}`}>
          <button>Checkout</button>
        </Link>
      </div>
    );
  }
};

export default connect(null, null)(Cart);