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
    this.clearProductList = this.clearProductList.bind(this);
  }

  clearProductList() {
    this.props.clearProducts();
  }

  render() {
    let items =
      this.props.items.map((product, index) => {
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
        <button onClick={this.clearProductList}>Clear Product List</button>
      </span>
    );
  }
}
ProductList.contextTypes = {
  store: PropTypes.object
};

const mapStateToProps = state => {
  return {
    items: state.products.items
  }
}

export default connect(mapStateToProps, { clearProducts })(ProductList);
