import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Auth } from '../Auth/Auth';
import { fetchCustomerInfo } from '../actions/customerActions.jsx';
import { fetchCustomerInfoByToken } from '../actions/customerActions.jsx';
import CustomerProfile from '../components/customer/CustomerProfile.jsx';

const auth = new Auth();

class CustomerHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /* TODO: use customer ID retrieved from DB upon login, instead of hardcoding */
    /* this.props.fetchCustomerInfo({ id: 1 }); */
    this.props.fetchCustomerInfoByToken();
  }

  render() {
    // redirect to home if not logged in, shouldn't be here
    if (!auth.isAuthenticated()) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <CustomerProfile
          customerInfo={this.props.customerInfo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ customerInfo: state.customerInfo });
export default connect(mapStateToProps, { fetchCustomerInfo, fetchCustomerInfoByToken })(CustomerHome);
