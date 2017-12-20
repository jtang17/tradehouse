import React from 'react';

import { Link } from 'react-router-dom';

class StoreItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to={`/product/${this.props.product.id}`}>
          Product: {this.props.product.title}
        </Link>
        <br />
        Price: ${parseFloat(this.props.product.unitPrice).toFixed(2)}<br />
        Only {this.props.product.quantity} left!<br />
        Description: {this.props.product.description}<br />
        <button onClick={this.props.addToCart.bind(null, this.props.product, this.props.customerId)} >Add to cart</button>
      </div>
    );
  }
}

export default StoreItem;
