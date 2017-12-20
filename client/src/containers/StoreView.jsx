import React from 'react';
import axios from 'axios';
import SingleStore from './SingleStore.jsx';
import Cart from './Cart.jsx';
import { connect } from 'react-redux';
import { fetchMerchantProducts } from '../actions/productActions.jsx';
import { fetchCart } from '../actions/cartActions.jsx';

class StoreView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/customers/bySub/${localStorage.idToken}`)
         .then(res => this.setState((prevState) => {
           this.props.fetchCart(res.data.id);
           return { customerId: res.data.id };
         }))
         .catch(err => console.error(err));
  }

  render() {
    // TODO: have Cart render based on logged in customer ID
    return (
      <div>
        <Cart customerId={this.state.customerId} />
        <SingleStore customerId={this.state.customerId} merchantId={this.props.match.params.merchantId} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
});

export default connect(mapStateToProps, { fetchCart })(StoreView);
