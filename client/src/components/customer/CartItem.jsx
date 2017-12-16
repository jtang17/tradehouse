import React from 'react';

const CartItem = props => (
  <div>
    {props.product.title} - ${parseFloat(props.product.unitPrice).toFixed(2)}
    <button onClick={props.removeFromCart.bind(null, props.product)}>Remove From Cart</button>
    <button onClick={props.increaseQuantityInCart.bind(null, props.product)}>+</button>
    <button onClick={props.decreaseQuantityInCart.bind(null, props.product)}> -</button>
  </div>
);

export default CartItem;
