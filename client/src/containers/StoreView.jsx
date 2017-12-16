import React from 'react';
import SingleStore from './SingleStore.jsx';
import Cart from './Cart.jsx';
import { connect } from 'react-redux';
import { fetchMerchantProducts } from '../actions/productActions.jsx';

class StoreView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    // TODO: have SingleStore render products based on which merchant's store it is
    return (
      <div>
        <Cart />
        <SingleStore />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(null, null)(StoreView);
