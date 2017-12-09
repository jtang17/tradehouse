import React from 'react';
import PropTypes from 'prop-types';

class ProductItem extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { store } = this.context;
  }
  onDeleteClick() {
    store.dispatch(deleteProduct(this.props.index));
  }

  render() {
    const { store } = this.context;
    return (
      <li>
        <a href="#">{this.props.productName.trim()}</a>
        <a href="#" onClick={this.onDeleteClick.bind(this)} style={{textDecoration: 'none'}}>[x]</a>
      </li>
    );
  }
}
ProductItem.contextTypes = {
  store: PropTypes.object
}

export default ProductItem;