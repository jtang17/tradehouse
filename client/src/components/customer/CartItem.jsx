import React from 'react';

const CartItem = (props) => {
  console.log(props.product);
  return (
    <div>
      {props.product.title} - ${parseFloat(props.product.unitPrice).toFixed(2)}
    </div>
  );
};

export default CartItem;
