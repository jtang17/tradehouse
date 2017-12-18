import React from 'react';
import { Field, reduxForm } from 'redux-form';


let SidebarSearchForm = (props) => {
  const handleSubmit = (values) => {
    values.preventDefault();
    console.log(values.target[0].defaultValue);
  };
  console.log('SidebarSearchForm: ', props);
  const {
    allMerchants,
    fetchAllMerchants,
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
      <button onClick={fetchAllMerchants.bind(null)}>Get all Merchants</button>
    </div>
  );
};

SidebarSearchForm = reduxForm({
  form: 'SidebarSearchForm',
})(SidebarSearchForm);

export default SidebarSearchForm;
