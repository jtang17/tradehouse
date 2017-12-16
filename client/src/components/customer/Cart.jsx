import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem.jsx';

//TODO: pass in customer Id for Link route
const Cart = (props) => {
  let totalCost = 0;
  props.cart.forEach((item) => {
    totalCost += item.unitPrice;
  });
  return (
    <div>
      <ol>
        Current Cart: {props.cart.map((product, index) => <CartItem product={product} key={index} removeFromCart={props.removeFromCart} />)}
      </ol>
      <br />
      Total Price: ${parseFloat(totalCost).toFixed(2)}
      <Link to={`/checkout/${1}`}>
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
