import React from 'react';

import { Link } from 'react-router-dom';

class StoreItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="productsEntry__card">
        <div className="productImg__card">
          <Link to={`/product/${this.props.product.id}`}>
            <img src={this.props.product.imageUrl} />
          </Link>
        </div>
        <div className="streamsTitle__card">
          <Link to={`/product/${this.props.product.id}`}>
            <div className="productTitle__card">
              <h5>{this.props.product.title}</h5>
              <p>Product Rating: [insert me]</p>
              <p>Left in Stock: {this.props.product.quantity}</p>
            </div>
          </Link>
          <div className="productDescription__card">
            <p>Description: {this.props.product.description}</p>
            <div className="productCTA__card">
              <span>
                Cost: ${parseFloat(this.props.product.unitPrice).toFixed(2)}
              </span>
              {this.props.customerInfo && this.props.customerInfo.id ? (
                <button
                  className="btn--action"
                  onClick={this.props.addToCart.bind(
                    null,
                    this.product,
                    this.props.customerInfo.id,
                  )}
                >
                  Add to Cart
                </button>
              ) : (
                <div>Please log in to shop</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreItem;
