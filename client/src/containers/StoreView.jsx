import React from 'react';
import axios from 'axios';
import SingleStore from './SingleStore.jsx';
import Cart from './Cart.jsx';
import { connect } from 'react-redux';

import { fetchCart } from '../actions/cartActions.jsx';
import { fetchCustomerInfoByToken } from '../actions/customerActions.jsx';

class StoreView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCustomerInfoByToken()
      .then(() => this.props.fetchCart(this.props.customerInfo.id));
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
  cart: state.cart,
  customerInfo: state.customerInfo,
});

export default connect(mapStateToProps, { fetchCart, fetchCustomerInfoByToken })(StoreView);
