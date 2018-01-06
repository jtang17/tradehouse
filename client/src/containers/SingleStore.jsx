import React from 'react';
import { connect } from 'react-redux';

import Cart from './Cart.jsx';
import StoreItem from '../components/customer/StoreItem.jsx';

import { addToCart, removeFromCart } from '../actions/cartActions.jsx';

class SingleStore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { storeInfo } = this.props;
    return (
      <div className="singleStore">
        <div className="storeHeader">
          {storeInfo.logo && <img src={storeInfo.logo} style={{ width: '200px' }} />}
          <h4>Store Page: {storeInfo.storeName}</h4>
          Location:{storeInfo.location}<br />
          <p>{storeInfo.description}</p>
        </div>
        <hr />
        <div className="storeProductList">
          <h4>Products:</h4>
          {this.props.merchantProducts.map((product, index) => <StoreItem key={index} product={product} addToCart={this.props.addToCart} customerInfo={this.props.customerInfo} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customerInfo: state.customerInfo,
});

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStore);
