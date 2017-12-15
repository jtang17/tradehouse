import React from 'react';
import { connect } from 'react-redux';

import Cart from '../components/customer/Cart.jsx';

import { fetchCart } from '../actions/cartActions.jsx';

class CheckoutView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchCart();
    // fetch cart of logged in customer
  }

  render() {
    return (
      <div>
        <div>Checkout View</div>
        <Cart cart={this.props.cart} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { fetchCart })(CheckoutView);
