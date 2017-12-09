import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem.jsx';
import {
  clearProducts
} from '../actions/actions.jsx';


class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    };
    this.clearProductList = this.clearProductList.bind(this);
  }

  componentWillMount() {
    const { store } = this.context;
    store.subscribe(() => {
      var state = store.getState();
      this.setState({
        items: state.products.items
      });
    });
  }

  clearProductList() {
    const { store } = this.context;
    store.dispatch(clearProducts());
  }

  render() {
    const { store } = this.context;
    var items = [];

    this.state.items.forEach((product, index) => {
      items.push(<ProductItem
        key={index}
        index={index}
        product={product}
      />);
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
        <ol>{ items }</ol>
        <button onClick={this.clearProductList}>Clear Product List</button>
      </span>
    );
  }
}
ProductList.contextTypes = {
  store: PropTypes.object
};

export default ProductList;