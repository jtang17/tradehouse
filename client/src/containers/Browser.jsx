import React from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../actions/productActions.jsx';

import BrowserBody from '../components/customer/BrowserBody.jsx';

class Browser extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    return (
      <div>
        <BrowserBody products={this.props.products} />
      </div>
    );
  }
}

// TODO: fetch streams, videos, and products to be displayed on browser from database
const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps, { fetchAllProducts })(Browser);
