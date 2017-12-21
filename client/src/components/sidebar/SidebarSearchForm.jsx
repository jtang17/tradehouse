import React from 'react';
import { Field, reduxForm } from 'redux-form';


let SidebarSearchForm = (props) => {
  const handleSubmit = (values) => {
    values.preventDefault();
    console.log(values.target[0].defaultValue);
  };
  const {
    allMerchants,
    allProducts,
    fetchAllMerchants,
    fetchAllProducts,
  } = props;
  return (
    <div className="SidebarSearchForm">
      <form onSubmit={handleSubmit}>
        <Field
          name="searchForm"
          component="input"
          type="test"
          placeholder="Search"
        />
      </form>
      <button className="btn--nav" onClick={fetchAllMerchants.bind(null)}>Get all Merchants</button>
      <button className="btn--nav" onClick={fetchAllProducts.bind(null)}>Get all Products</button>
    </div>
  );
};

SidebarSearchForm = reduxForm({
  form: 'SidebarSearchForm',
})(SidebarSearchForm);

export default SidebarSearchForm;
