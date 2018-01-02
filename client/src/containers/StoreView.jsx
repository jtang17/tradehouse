import React from 'react';
import axios from 'axios';
import SingleStore from './SingleStore.jsx';
import Cart from './Cart.jsx';
import { connect } from 'react-redux';

import { fetchCustomerInfoByToken } from '../actions/customerActions.jsx';

class StoreView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCustomerInfoByToken();
  }

  render() {
    return (
      <div>
        <SingleStore customerId={this.props.customerInfo.id} merchantId={this.props.match.params.merchantId} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customerInfo: state.customerInfo,
});

export default connect(mapStateToProps, { fetchCustomerInfoByToken })(StoreView);
