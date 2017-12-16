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
        <div>Checkout View</div>
        <Cart />
      </div>
    );
  }
}


export default connect(null, null)(CheckoutView);
