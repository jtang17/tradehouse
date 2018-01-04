import React from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../actions/productActions.jsx';
import { fetchAllMerchants } from '../actions/merchantActions.jsx';
import { addToCart } from '../actions/cartActions.jsx';
import { fetchCustomerInfoByToken } from '../actions/customerActions.jsx';
import { fetchAllStreams } from '../actions/streamActions.jsx';

import BrowserBody from '../components/customer/BrowserBody.jsx';

class Browser extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
    this.props.fetchAllMerchants();
    this.props.fetchAllStreams();
    this.props.fetchCustomerInfoByToken();
  }

  render() {
    return (
      <div>
        <BrowserBody
          products={this.props.products}
          merchants={this.props.merchants}
          streams={this.props.streams}
          addToCart={this.props.addToCart}
          customerInfo={this.props.customerInfo}
        />
      </div>
    );
  }
}

// TODO: fetch streams, videos, and products to be displayed on browser from database
const mapStateToProps = state => ({
  products: state.allProducts,
  merchants: state.allMerchants,
  customerInfo: state.customerInfo,
  streams: state.streams,
});

export default connect(mapStateToProps, { fetchAllProducts, fetchAllMerchants, fetchAllStreams, addToCart, fetchCustomerInfoByToken, })(Browser);
