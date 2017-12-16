import React from 'react';
import SingleStore from './SingleStore.jsx';
import Cart from '../components/customer/Cart.jsx';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions.jsx';
import { addToCart, fetchCart, removeFromCart, testAdd } from '../actions/cartActions.jsx';

class StoreView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
    // should fetchProducts of one particular merchant
    // should fetchMerchantInfo of one particular merchant

    this.props.fetchCart();
  }

  render() {
    return (
      <div>
        <Cart
          cart={this.props.cart}
          removeFromCart={this.props.removeFromCart}
        />
        <SingleStore
          items={this.props.items}
          addToCart={this.props.addToCart}
          cart={this.props.cart}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  cart: state.cart,
});

const mapDispatchToProps = {
  fetchProducts, addToCart, fetchCart, removeFromCart, testAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreView);
