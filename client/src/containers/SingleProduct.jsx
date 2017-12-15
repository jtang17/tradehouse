import React from 'react';

//TODO: BUILD SINGLE PRODUCT VIEW

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const product = {
      title: 'Mooncake',
      description: 'Yummy',
      productQuantity: 5,
      unitPrice: 1.99
    }
    return (
      {product.title} - {productQuantity} remaining
      {product.unitPrice}
      {product.description}
    )
  }
}

export default SingleProduct;