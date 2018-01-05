import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

let AddProductForm = (props) => {
  const handleSubmit = (values) => {
    const product = {
      title: values.target[0].defaultValue,
      quantity: parseInt(values.target[1].defaultValue, 10),
      unitPrice: parseFloat(values.target[2].defaultValue),
      description: values.target[3].defaultValue,
      imageUrl: values.target[4].defaultValue,
      merchantId: props.merchantId,
    };
    return props.addProduct(product);
  };

  return (
    <div className="productForm__container">
      <span onClick={props.toggleAddProduct}>[X]</span>
      <h5>Add a New Product</h5>
      <form className="productForm" onSubmit={handleSubmit}>
        <Field type="text" component="input" name="title" placeholder="Title" />
        <Field type="text" component="input" name="productQuantity" placeholder="Quantity" />
        <Field type="text" component="input" name="price" placeholder="Price" />
        <Field type="text" component="input" name="description" placeholder="Description" />
        <input className="btn--action" type="submit" value="Add Product" />
      </form>
  </div>
  );
};

AddProductForm = reduxForm({
  form: 'addProduct',
})(AddProductForm);

export default AddProductForm;
