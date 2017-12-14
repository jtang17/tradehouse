import React from 'react';
import {
  deleteProduct,
} from '../actions/actions.jsx';

class StoreItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        Product: {product.title}<br />
        Price: ${parseFloat(product.price).toFixed(2)}<br />
        Only {product.quantity} left!<br />
        Description: {product.description}<br />
        <button>Add to cart</button>
      </div>
    );
  }
}

export default StoreItem;
