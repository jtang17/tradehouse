import React from 'react';
import { connect } from 'react-redux';

import Cart from './Cart.jsx';

class CheckoutView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h3>Checkout View</h3>
        <Cart />
      </div>
    );
  }
}


export default connect(null, null)(CheckoutView);
