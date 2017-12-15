import React from 'react';
import { connect } from 'react-redux';

import Cart from '../components/customer/Cart.jsx';

class CheckoutView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Checkout View</div>
        <Cart cart={this.props.cart} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps, null)(CheckoutView);