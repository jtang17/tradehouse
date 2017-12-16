import React from 'react';

import { Link } from 'react-router-dom';

class StoreItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
    this.props.addToCart(this.props.product);
  }

  render() {
    // TODO: Need to be able to click on a product and view its SingleProduct container view
    return (
      <div>
        <Link to={`/product/${this.props.product.id}`}>
          Product: {this.props.product.title}
        </Link>
        <br />
        Price: ${parseFloat(this.props.product.unitPrice).toFixed(2)}<br />
        Only {this.props.product.quantity} left!<br />
        Description: {this.props.product.description}<br />
        <button onClick={this.handleAddToCart} >Add to cart</button>
      </div>
    );
  }
}

export default StoreItem;
