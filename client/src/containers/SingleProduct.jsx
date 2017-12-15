import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions/cartActions.jsx';
import { fetchSingleProduct } from '../actions/productActions.jsx';

//TODO: BUILD SINGLE PRODUCT VIEW

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidMount() {
    //this.props.fetchSingleProduct();
    //fetch information of specific product

  }

  handleAddClick() {
    // this.props.addToCart(this.props.product);
    // add product from single product view to current customer's cart
  }

  render() {
    const product = {
      title: 'Mooncake',
      description: 'Yummy',
      productQuantity: 5,
      unitPrice: 1.99
    }
    return (
      <div>
        {product.title} - {productQuantity} remaining<br />
        {product.unitPrice}<br />
        {product.description}<br/>
        <button onClick={this.handleAddClick}>Add to Cart</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  product: state.singleProduct,
});

export default connect(mapStateToProps, { addToCart, fetchSingleProduct })(SingleProduct);