import React from 'react';

const CartItem = (props) => {
  console.log(props.product);
  return (
    <div>
      {props.product.title} - ${parseFloat(props.product.unitPrice).toFixed(2)}
      <button onClick={props.removeFromCart.bind(null, props.product)}>Remove From Cart</button>
    </div>
  );
};

export default CartItem;
