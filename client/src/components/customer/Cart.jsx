import React from 'react';
import CartItem from './CartItem.jsx';

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
      <a href="/checkout">
        <button>Checkout</button>
      </a>
    </div>
  );
};

export default Cart;
