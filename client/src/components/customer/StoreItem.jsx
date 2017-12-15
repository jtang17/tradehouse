import React from 'react';

class StoreItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
    this.props.testAdd(this.props.product);
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        Product: {product.title}<br />
        Price: ${parseFloat(product.unitPrice).toFixed(2)}<br />
        Only {product.quantity} left!<br />
        Description: {product.description}<br />
        <button onClick={this.handleAddToCart} >Add to cart</button>
      </div>
    );
  }
}

export default StoreItem;
