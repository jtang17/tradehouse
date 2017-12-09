import React from 'react';
import PropTypes from 'prop-types';
import {
  addProduct
} from '../actions/actions.jsx';

class AddProductForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productName: '',
      productQuantity: '',
      price: '',
      description: '',
      publishDate: '',
      lastEditedDate: '',
    };
    this.onProductNameChanged = this.onProductNameChanged.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    const { store } = this.context;
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { store } = this.context;
    store.dispatch(addProduct(this.state.productName));
    this.setState({ productName: '' });
  }

  onProductNameChanged(e) {
    var productName = e.target.value;
    this.setState({ productName: productName });
  }

  render() {
    const { store } = this.context;
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Product..." onChange={this.onProductNameChanged} value={this.state.productName} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}
AddProductForm.contextTypes = {
  store: PropTypes.object
};

export default AddProductForm;