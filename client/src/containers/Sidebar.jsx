import React from 'react';
import CustomerSidebar from '../components/customer/CustomerSidebar.jsx';
import MerchantSidebar from '../components/merchant/MerchantSidebar.jsx';
import Cart from './Cart.jsx';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCart } from '../actions/cartActions.jsx';
import { fetchCustomerInfoByToken, fetchSubscriptions, fetchWishlist } from '../actions/customerActions.jsx';
import { fetchMerchantInfoByToken } from '../actions/merchantActions.jsx';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    // extrapolate to redux store
    this.state = {
      merchant: false,
    };
  }

  componentDidMount() {
    this.props.fetchCustomerInfoByToken()
      .then(() => this.props.fetchCart(this.props.customerInfo.id))
      .then(() => this.props.fetchSubscriptions(this.props.customerInfo.id))
      .then(() => this.props.fetchWishlist(this.props.customerInfo.id));
    this.props.fetchMerchantInfoByToken();
  }

  render() {
    const {
      allMerchants,
      allProducts,
      fetchAllMerchants,
      fetchAllProducts,
    } = this.props;
    return (
      <div className="sidebar__container">
        {
          this.state.merchant ? <MerchantSidebar /> :
          <CustomerSidebar
            wishlist={this.props.wishlist}
            subscriptions={this.props.subscriptions}
            wishlist={this.props.wishlist}
          />
        }
        {(this.props.customerInfo && this.props.customerInfo.id) &&
          <Cart
            customerInfo={this.props.customerInfo}
            cart={this.props.cart}
          />
        }
        Follows
        <br />
        {this.props.subscriptions.map((merchant, index) => (
          <div key={index}><Link to={`/store/${merchant.id}`}>{merchant.storeName}</Link></div>
        ))}
        <br />
        Wishlist
        <br />
        {this.props.wishlist.map((product, index) => (
          <div key={index}><Link to={`/product/${product.id}`}>{product.title}</Link></div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  customerInfo: state.customerInfo,
  wishlist: state.wishlist,
  subscriptions: state.subscriptions,
  merchantInfo: state.merchantInfo,
});

const mapDispatchToProps = {
  fetchCustomerInfoByToken, fetchSubscriptions, fetchWishlist, fetchCart, fetchMerchantInfoByToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
