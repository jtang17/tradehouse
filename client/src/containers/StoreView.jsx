import React from 'react';
import axios from 'axios';
import SingleStore from './SingleStore.jsx';
import Cart from './Cart.jsx';
import { connect } from 'react-redux';

import { fetchCustomerInfoByToken } from '../actions/customerActions.jsx';
import { fetchChannelInfo } from '../actions/merchantActions.jsx';
import { fetchMerchantProducts } from '../actions/productActions.jsx';

class StoreView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannelInfo(this.props.match.params.merchantId);
    this.props.fetchMerchantProducts(this.props.match.params.merchantId);
    this.props.fetchCustomerInfoByToken();
  }

  render() {
    return (
      <div>
        <SingleStore
          storeInfo={this.props.channelInfo}
          merchantProducts={this.props.merchantProducts}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customerInfo: state.customerInfo,
  channelInfo: state.channelInfo,
  merchantProducts: state.merchantProducts,
});

export default connect(mapStateToProps, { fetchCustomerInfoByToken, fetchChannelInfo, fetchMerchantProducts })(StoreView);
