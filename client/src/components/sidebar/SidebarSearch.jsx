import React from 'react';
import SidebarSearchForm from './SidebarSearchForm.jsx';
import { Link } from 'react-router-dom';

class SidebarSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      allMerchants,
      allProducts,
      fetchAllMerchants,
      fetchAllProducts,
    } = this.props;
    return (
      <div>
        <h4>Search</h4>
        <SidebarSearchForm
          allMerchants={allMerchants}
          allProducts={allProducts}
          fetchAllMerchants={fetchAllMerchants}
          fetchAllProducts={fetchAllProducts}
        />
        <Link to="/browse"><h6>Browse All Content</h6></Link>
      </div>
    );
  }
}

export default SidebarSearch;
