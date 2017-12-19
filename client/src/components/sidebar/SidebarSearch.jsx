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
        <Link to="browse"><h4>Browse Content</h4></Link>
        <SidebarSearchForm
          allMerchants={allMerchants}
          allProducts={allProducts}
          fetchAllMerchants={fetchAllMerchants}
          fetchAllProducts={fetchAllProducts}
        />
      </div>
    );
  }
}

export default SidebarSearch;
