import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CartItem from '../components/customer/CartItem.jsx';
import { removeFromCart, fetchCart, decreaseQuantityInCart, increaseQuantityInCart } from '../actions/cartActions.jsx';

import { connect } from 'react-redux';

// TODO: pass in customer Id for Link route
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* id: 1*/
    };
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/customers/bySub/${localStorage.idToken}`)
    /* .then(res => this.setState({ id: res.data.id }, (err, newState) => {console.log(err);
     *   console.log(newState);
     *   this.props.fetchCart(newState.id)}));*/
    /* .then(res => this.setState({ id: res.data.id }))
     * .then(() => this.props.fetchCart(this.state.id));*/
         .then(res => this.setState((prevState) => {
           this.props.fetchCart(res.data.id);
           return { id: res.data.id };
         }))
    /* this.props.fetchCart();*/
  }

  render() {
    let totalCost = 0;
    this.props.cart.forEach((item) => {
      totalCost += item.quantity * item.unitPrice;
    });
    return (
      <div>
        <ol>
          Current Cart: {this.props.cart.map((product, index) => (<CartItem product={product} key={index} removeFromCart={this.props.removeFromCart} increaseQuantityInCart={this.props.increaseQuantityInCart} decreaseQuantityInCart={this.props.decreaseQuantityInCart} customerId={this.state.id} />))}
          Total Price: ${parseFloat(totalCost).toFixed(2)}
          <br />
          <Link to={`/checkout/${this.state.id}`}>
            <br />
            <button>Checkout</button>
          </Link>
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  removeFromCart, fetchCart, decreaseQuantityInCart, increaseQuantityInCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
