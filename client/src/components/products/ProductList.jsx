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
          You currently have no products listed.
          <br />
          Add some products to start up your store!
        </p>
      );
    }
    return (
      <div className="productsTable__container">
        <table className="productsTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{ items }</tbody>
        </table>
      </div>
    );
  }
}
ProductList.contextTypes = {
  store: PropTypes.object,
};

export default ProductList;
