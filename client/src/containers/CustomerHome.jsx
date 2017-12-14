import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Auth } from '../Auth/Auth';
import { fetchCustomerInfo } from '../actions/actions.jsx';

const auth = new Auth();

class CustomerHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /* TODO: use customer ID retrieved from DB upon login, instead of hardcoding */
    this.props.fetchCustomerInfo({ id: 1 });
  }

  render() {
    // redirect to home if not logged in, shouldn't be here
    if (!auth.isAuthenticated()) {
      return <Redirect to="/" />
    }
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = state => state.customerInfo;
export default connect(mapStateToProps, { fetchCustomerInfo })(CustomerHome);
