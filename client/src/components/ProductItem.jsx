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
        <td><a href="#">{this.props.product.title.trim()}</a>
            <a href="#" onClick={this.onDeleteClick.bind(this)} style={{textDecoration: 'none'}}>[x]</a></td>
        <td>Quantity: {this.props.product.quantity}</td>
        <td>Price: {this.props.product.unitPrice}</td>
        <td> Description: {this.props.product.description} </td>
      </tr>
    );
  }
}
ProductItem.contextTypes = {
  store: PropTypes.object
};

export default connect(null, { deleteProduct })(ProductItem);
