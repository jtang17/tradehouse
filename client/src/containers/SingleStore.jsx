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
    this.props.fetchMerchantProducts(1);
    // TODO: should fetchProducts of one particular merchant

    this.props.fetchMerchantInfo(1);
    // TODO: should fetchMerchantInfo of one particular merchant
  }

  render() {
    const { merchantInfo } = this.props;
    return (
      <div className="singleStore">
        <div className="storeHeader">
          <h4>Store Page: {merchantInfo.username}</h4>
          Location:{merchantInfo.location}<br />
          <p>{merchantInfo.description}</p>
        </div>
        <div className="storeProductList">
          <h4>Products:</h4>
          {this.props.products.map((product, index) => <StoreItem key={index} product={product} addToCart={this.props.addToCart} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.merchantProducts,
  cart: state.cart,
  merchantInfo: state.merchantInfo,
});

const mapDispatchToProps = {
  addToCart, removeFromCart, fetchMerchantProducts, fetchMerchantInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStore);
