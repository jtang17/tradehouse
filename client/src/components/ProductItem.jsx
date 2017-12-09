import React from 'react';
import PropTypes from 'prop-types';
import {
  deleteProduct,
} from '../actions/actions.jsx';

class ProductItem extends React.Component {
  constructor(props) {
    super(props)
  }

  onDeleteClick() {
    const { store } = this.context;
    store.dispatch(deleteProduct(this.props.index));
  }

  render() {
    const { store } = this.context;
    return (
      <li>
        <a href="#">{this.props.product.productName.trim()}</a>
        <a href="#" onClick={this.onDeleteClick.bind(this)} style={{textDecoration: 'none'}}>[x]</a>
      </li>
    );
  }
}
ProductItem.contextTypes = {
  store: PropTypes.object
}

export default ProductItem;