// React, Redux, React-Router-DOM
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Components
import SidebarSearch from '../sidebar/SidebarSearch.jsx';
import Cart from '../../containers/Cart.jsx';
// Actions
import { fetchCart } from '../../actions/cartActions.jsx';
import { fetchCustomerInfoByToken, fetchSubscriptions, fetchWishlist } from '../../actions/customerActions.jsx';
import { fetchMerchantInfoByToken } from '../../actions/merchantActions.jsx';

class CustomerSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const {
      allMerchants,
      allProducts,
      fetchAllMerchants,
      fetchAllProducts,
    } = this.props;
    return (
      <div className="CustomerSidebar">
        <Cart
          customerInfo={this.props.customerInfo}
          cart={this.props.cart}
        />
        <h5>Follows</h5>
        {this.props.subscriptions.map((merchant, index) => (
          <div key={index}><Link to={`/store/${merchant.id}`}>{merchant.storeName}</Link></div>
          ))}

        <h5>Wishlist</h5>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSidebar);
