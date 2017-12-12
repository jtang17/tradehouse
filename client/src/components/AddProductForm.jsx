import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import PropTypes from 'prop-types';
import {
  addProduct
} from '../actions/actions.jsx';

class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productQuantity: '',
      price: '',
      description: '',
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onProductNameChanged = this.onProductNameChanged.bind(this);
    this.onProductQuantityChanged = this.onProductQuantityChanged.bind(this);
    this.onPriceChanged = this.onPriceChanged.bind(this);
    this.onDescriptionChanged = this.onDescriptionChanged.bind(this);

  }

  onFormSubmit(e) {
    e.preventDefault();
    let product = {
      productName: this.state.productName,
      productQuantity: parseInt(this.state.productQuantity),
      price: parseFloat(this.state.price),
      description: this.state.description,
      merchantId: 1,
    };

    this.props.addProduct(product);

    this.setState({
      productName: '',
      productQuantity: '',
      price: '',
      description: '',
    });
  }

  onProductNameChanged(e) {
    this.setState({ productName: e.target.value });
  }

  onProductQuantityChanged(e) {
    this.setState({ productQuantity: e.target.value });
  }

  onPriceChanged(e) {
    this.setState({ price: e.target.value });
  }

  onDescriptionChanged(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="container">
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="Product..." onChange={this.onProductNameChanged} value={this.state.productName} />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Quantity..." onChange={this.onProductQuantityChanged} value={this.state.productQuantity} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="$0.00" onChange={this.onPriceChanged} value={this.state.price} />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Description..." onChange={this.onDescriptionChanged} value={this.state.description} />
            </div>
          </div>
          <input className="btn btn-primary" type="submit" value="Add Product" />
        </div>
      </form>
    );
  }
}

export default AddProductForm;
