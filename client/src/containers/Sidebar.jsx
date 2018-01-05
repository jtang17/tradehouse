// React, Redux, React-Router-DOM
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Components
import CustomerSidebar from '../components/customer/CustomerSidebar.jsx';
import MerchantSidebar from '../components/merchant/MerchantSidebar.jsx';
import SidebarSearch from '../components/sidebar/SidebarSearch.jsx';
import Cart from './Cart.jsx';
// Actions
import { fetchCart } from '../actions/cartActions.jsx';
import {
  fetchCustomerInfoByToken,
  fetchSubscriptions,
  fetchWishlist,
} from '../actions/customerActions.jsx';
import { fetchMerchantInfoByToken } from '../actions/merchantActions.jsx';
import {
  fetchAllStreams,
  fetchStreamSearch,
  searchAllMerchants,
  fetchMerchantSearch,
  searchAllProducts,
  fetchProductSearch,
  searchMixed,
} from '../actions/searchActions.jsx';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    // extrapolate to redux store
    this.state = {
      merchant: false,
      searchTab: true,
    };
    this.handlesearchTabClick = this.handlesearchTabClick.bind(this);
    this.handleRightTabClick = this.handleRightTabClick.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchCustomerInfoByToken()
      .then(() => this.props.fetchCart(this.props.customerInfo.id))
      .then(() => this.props.fetchSubscriptions(this.props.customerInfo.id))
      .then(() => this.props.fetchWishlist(this.props.customerInfo.id));
    this.props.fetchMerchantInfoByToken();
  }

  handlesearchTabClick() {
    this.setState({ searchTab: true });
  }

  handleRightTabClick() {
    this.setState({ searchTab: false });
  }

  render() {
    const {
      allMerchants,
      allProducts,
      searchAllMerchants,
      searchAllProducts,
    } = this.props;
    return (
      <div className="sidebar__container">
        {this.state.merchant || this.props.customerInfo.id ? (
          <div className="sidebar__tabs">
            <a className="btn--sidebar rightTab" onClick={this.handleRightTabClick}>Dashboard</a>
            <a className="btn--sidebar searchTab" onClick={this.handlesearchTabClick}>
              Search
            </a>
          </div>
        ) : (
          <h3>Search</h3>
        )}

        {this.state.searchTab ? (
          <SidebarSearch
            fetchAllStreams={this.props.fetchAllStreams}
            fetchStreamSearch={this.props.fetchStreamSearch}
            searchAllMerchants={this.props.searchAllMerchants}
            fetchMerchantSearch={this.props.fetchMerchantSearch}
            searchAllProducts={this.props.searchAllProducts}
            fetchProductSearch={this.props.fetchProductSearch}
            searchMixed={this.props.searchMixed}
          />
        ) : null}

        {!this.state.searchTab && this.state.merchant ? (
          <MerchantSidebar />
        ) : null}

        {!this.state.searchTab &&
          this.props.customerInfo &&
          this.props.customerInfo.id && (
            <CustomerSidebar
              wishlist={this.props.wishlist}
              subscriptions={this.props.subscriptions}
              wishlist={this.props.wishlist}
            />
          )}
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
  fetchCustomerInfoByToken,
  fetchSubscriptions,
  fetchWishlist,
  fetchCart,
  fetchMerchantInfoByToken,
  fetchAllStreams,
  fetchStreamSearch,
  searchAllMerchants,
  fetchMerchantSearch,
  searchAllProducts,
  fetchProductSearch,
  searchMixed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);


// rebase comment