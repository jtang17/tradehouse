import React from 'react';
import PropTypes from 'prop-types';
import {
  deleteProduct,
} from '../actions/actions.jsx';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick() {
    console.log('need to query database and delete this product');
    //need to write
  }

  render() {
    return (
      <tr>
        <th>{this.props.index+1}</th>
        <td>{this.props.product.title.trim()}
            <a href="#" onClick={this.onDeleteClick.bind(this)} style={{textDecoration: 'none', color: 'red'}}>[x]</a></td>
        <td>{this.props.product.quantity}</td>
        <td>${parseFloat(this.props.product.unitPrice).toFixed(2)}</td>
        <td>{this.props.product.description} </td>
      </tr>
    );
  }
}
ProductItem.contextTypes = {
  store: PropTypes.object
};

export default ProductItem;
