import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  deleteProduct,
} from '../actions/actions.jsx';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onDeleteClick() {
    this.props.deleteProduct(this.props.index);
  }

  render() {
    return (
      <tr>
        <th>{this.props.index+1}</th>
        <td><a href="#">{this.props.product.productName.trim()}</a>
            <a href="#" onClick={this.onDeleteClick.bind(this)} style={{textDecoration: 'none'}}>[x]</a></td>
        <td>Quantity: {this.props.product.productQuantity}</td>
        <td>Price: {this.props.product.price}</td>
        <td> Description: {this.props.product.description} </td>
      </tr>
    );
  }
}
ProductItem.contextTypes = {
  store: PropTypes.object
};

export default connect(null, { deleteProduct })(ProductItem);
