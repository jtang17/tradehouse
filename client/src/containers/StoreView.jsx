import React from 'react';
import SingleStore from './SingleStore.jsx';
import Cart from '../components/customer/Cart.jsx';
import { connect } from 'react-redux';
import { addToCart, fetchCart, removeFromCart } from '../actions/cartActions.jsx';

class StoreView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCart();
    // should fetch current customer's cart
  }

  render() {
    // TODO: have SingleStore render products based on which merchant's store it is
    return (
      <div>
        <Cart
          cart={this.props.cart}
          removeFromCart={this.props.removeFromCart}
        />
        <SingleStore />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
});

export default connect(mapStateToProps, { fetchCart, removeFromCart })(StoreView);
