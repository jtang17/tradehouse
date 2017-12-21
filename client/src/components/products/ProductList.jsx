import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductItem from './ProductItem.jsx';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items =
      this.props.products.map((product, index) => <ProductItem key={index} index={index} product={product} deleteProduct={this.props.deleteProduct} />);

    if (!items.length) {
      return (
        <p>
          <i>No products</i>
        </p>
      );
    }

    return (
        <table className="products__table">
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
    );
  }
}
ProductList.contextTypes = {
  store: PropTypes.object,
};

export default ProductList;
