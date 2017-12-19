import React from 'react';
import axios from 'axios';
import SingleStore from './SingleStore.jsx';
import Cart from './Cart.jsx';
import { connect } from 'react-redux';
import { fetchMerchantProducts } from '../actions/productActions.jsx';
import { fetchCart } from '../actions/cartActions.jsx';

class StoreView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO: have Cart render based on logged in customer ID
    return (
      <div>
        <Cart />
        <SingleStore merchantId={this.props.match.params.merchantId} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
});

export default connect(mapStateToProps, { fetchCart })(StoreView);
