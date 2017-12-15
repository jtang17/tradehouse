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

    // this.props.fetchCart();
    // should fetch cart of logged in customer
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Cart cart={this.props.cart} />
        <div className="storeHeader">
          <h4>Store Page: Hardcoded Merchant Name</h4>
          An avid cheese seller
        </div>
        <div className="storeProductList">
          <h4>Products:</h4>
          {this.props.items.map((product, index) => <StoreItem key={index} product={product} testAdd={this.props.testAdd} cart={this.props.cart} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  cart: state.cart,
});

const mapDispatchToProps = { fetchProducts, addToCart, fetchCart, removeFromCart, testAdd };

export default connect(mapStateToProps, mapDispatchToProps)(StoreView);
