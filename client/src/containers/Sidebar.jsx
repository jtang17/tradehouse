import React from 'react';
import CustomerSidebar from '../components/customer/CustomerSidebar.jsx';
import MerchantSidebar from '../components/merchant/MerchantSidebar.jsx';
import { connect } from 'react-redux';

import { fetchCustomerInfoByToken, fetchSubscriptions, fetchWishlist } from '../actions/customerActions.jsx';

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
      .then(() => this.props.fetchSubscriptions(this.props.customerInfo.id))
      .then(() => this.props.fetchWishlist(this.props.customerInfo.id));
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
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customerInfo: state.customerInfo,
  wishlist: state.wishlist,
  subscriptions: state.subscriptions,
});

const mapDispatchToProps = { fetchCustomerInfoByToken, fetchSubscriptions, fetchWishlist };

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
