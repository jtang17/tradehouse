import React from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../actions/productActions.jsx';
import { fetchAllMerchants } from '../actions/merchantActions.jsx';

import BrowserBody from '../components/customer/BrowserBody.jsx';

class Browser extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
    this.props.fetchAllMerchants();
  }

  render() {
    return (
      <div>
        <BrowserBody
          products={this.props.products}
          merchants={this.props.merchants}
        />
      </div>
    );
  }
}

// TODO: fetch streams, videos, and products to be displayed on browser from database
const mapStateToProps = state => ({
  products: state.allProducts,
  merchants: state.allMerchants,
});

export default connect(mapStateToProps, { fetchAllProducts, fetchAllMerchants })(Browser);
