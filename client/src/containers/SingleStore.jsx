import React from 'react';
import { connect } from 'react-redux';

import Cart from './Cart.jsx';
import StoreItem from '../components/customer/StoreItem.jsx';

import { fetchMerchantProducts } from '../actions/productActions.jsx';
import { fetchMerchantInfo } from '../actions/merchantActions.jsx';
import { addToCart, removeFromCart } from '../actions/cartActions.jsx';

class SingleStore extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMerchantProducts(this.props.merchantId);
    this.props.fetchMerchantInfo(this.props.merchantId);
  }

  render() {
    const { merchantInfo } = this.props;
    return (
      <div className="singleStore">
        <div className="storeHeader">
          <h4>Store Page: {merchantInfo.storeName}</h4>
          Location:{merchantInfo.location}<br />
          <p>{merchantInfo.description}</p>
        </div>
        <div className="storeProductList">
          <h4>Products:</h4>
          {this.props.merchantProducts.map((product, index) => <StoreItem key={index} product={product} addToCart={this.props.addToCart} customerId={this.props.customerId} />)}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  merchantProducts: state.merchantProducts,
  cart: state.cart,
  merchantInfo: state.merchantInfo,
});

const mapDispatchToProps = {
  addToCart, removeFromCart, fetchMerchantProducts, fetchMerchantInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStore);
