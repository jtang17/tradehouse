import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductItem from './ProductItem.jsx';
import {
  clearProducts
} from '../actions/actions.jsx';

class ProductList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let items =
      this.props.products.map((product, index) => {
        return <ProductItem key={index} index={index} product={product} />
      });

    if (!items.length) {
      return (
        <p>
          <i>No products</i>
        </p>
      );
    }

    return (
      <span>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
        <tbody>{ items }</tbody>
        </table>
      </span>
    );
  }
}
ProductList.contextTypes = {
  store: PropTypes.object
};

export default ProductList;
