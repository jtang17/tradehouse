import React from 'react';
import StoreItem from '../components/customer/StoreItem.jsx';
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
        <Cart cart={this.props.cart} removeFromCart={this.props.removeFromCart} />
        <div className="storeHeader">
          <h4>Store Page: Hardcoded Merchant Name</h4>
          An avid cheese seller
        </div>
        <div className="storeProductList">
          <h4>Products:</h4>
          {this.props.items.map((product, index) => <StoreItem key={index} product={product} addToCart={this.props.addToCart} cart={this.props.cart} />)}
        </div>
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
