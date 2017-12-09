import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem.jsx';

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    };
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

  render() {
    const { store } = this.context;
    var items = [];

    this.state.items.forEach((item, index) => {
      items.push(<ProductItem
        key={index}
        index={index}
        productName={item.productName}
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
      <ol>{ items }</ol>
    );
  }
}
ProductList.contextTypes = {
  store: PropTypes.object
};

export default ProductList;