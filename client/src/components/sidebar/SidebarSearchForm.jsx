import React from 'react';
import { connect } from 'react-redux';
import { fetchAllMerchants } from '../../actions/customerActions.jsx';
import { Field, reduxForm } from 'redux-form';


let SidebarSearchForm = (props) => {
  const handleSubmit = (values) => {
    values.preventDefault();
    console.log(values.target[0].defaultValue);
    return;
  };
  console.log(props);
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="searchForm"
        component="input"
        type="test"
        placeholder="Search"
      />
    </form>
  );
};

SidebarSearchForm = reduxForm({
  form: 'SidebarSearchForm'
})(SidebarSearchForm);

const mapStateToProps = state => ({
  allMerchants: state.allMerchants,
})

export default connect(mapStateToProps, { fetchAllMerchants })(SidebarSearchForm);