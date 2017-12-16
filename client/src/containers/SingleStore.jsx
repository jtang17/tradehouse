import React from 'react';
import StoreItem from '../components/customer/StoreItem.jsx';

class SingleStore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="singleStore">
        <div className="storeHeader">
          <h4>Store Page: Hardcoded Merchant Name</h4>
          An avid cheese seller
        </div>
        <div className="storeProductList">
          <h4>Products:</h4>
          {this.props.items.map((product, index) => <StoreItem key={index} product={product} addToCart={this.props.addToCart} cart={this.props.cart} />)}
        </div>
      </div>
    );
  }
}

export default SingleStore;
