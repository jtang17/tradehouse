import React from 'react';
import { connect } from 'react-redux';

import Cart from './Cart.jsx';
import StoreItem from '../components/customer/StoreItem.jsx';

import { fetchCustomerInfoByToken } from '../actions/customerActions.jsx';
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
    this.props.fetchCustomerInfoByToken();
  }

  render() {
    const { merchantInfo } = this.props;
    return (
      <div className="singleStore">
        <div className="storeHeader">
          <img src={merchantInfo.logo} style={{ width: '200px' }} />
          <h4>Store Page: {merchantInfo.storeName}</h4>
          Location:{merchantInfo.location}<br />
          <p>{merchantInfo.description}</p>
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
  merchantProducts: state.merchantProducts,
  merchantInfo: state.merchantInfo,
  customerInfo: state.customerInfo,
});

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
  fetchMerchantProducts,
  fetchMerchantInfo,
  fetchCustomerInfoByToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStore);
