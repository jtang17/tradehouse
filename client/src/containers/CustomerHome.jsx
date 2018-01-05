import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Auth } from '../Auth/Auth';
import {
  fetchCustomerInfo,
  fetchCustomerInfoByToken,
  fetchWishlist,
  fetchSubscriptions,
} from '../actions/customerActions.jsx';
import CustomerProfile from '../components/customer/CustomerProfile.jsx';

const auth = new Auth();

class CustomerHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCustomerInfoByToken()
      .then(() => this.props.fetchWishlist(this.props.customerInfo.id))
      .then(() => this.props.fetchSubscriptions(this.props.customerInfo.id));
  }

  render() {
    console.log(this.props.customerInfo)
    console.log(this.props.subscriptions);
    console.log(this.props.wishlist);
    // redirect to home if not logged in, shouldn't be here
    if (!auth.isAuthenticated()) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <CustomerProfile
          customerInfo={this.props.customerInfo}
          subscriptions={this.props.subscriptions}
          wishlist={this.props.wishlist}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customerInfo: state.customerInfo,
  subscriptions: state.subscriptions,
  wishlist: state.wishlist,
});
export default connect(mapStateToProps, { fetchCustomerInfo, fetchCustomerInfoByToken, fetchWishlist, fetchSubscriptions, })(CustomerHome);
