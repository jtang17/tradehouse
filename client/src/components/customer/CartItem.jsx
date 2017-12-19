import React from 'react';

const CartItem = props => (
  <div>
    ({props.product.quantity}) {props.product.title} - ${parseFloat(props.product.unitPrice).toFixed(2)}
    <button onClick={props.removeFromCart.bind(null, props.product, props.customerId)}>Remove From Cart</button>
    <button onClick={props.increaseQuantityInCart.bind(null, props.product, props.customerId)}>+</button>
    <button onClick={props.decreaseQuantityInCart.bind(null, props.product, props.customerId)}>-</button>
    {'customerId: '+ props.customerId}
  </div>
);

export default CartItem;
