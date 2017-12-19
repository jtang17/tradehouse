import React from 'react';
import SidebarSearchForm from './SidebarSearchForm.jsx';

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
    console.log('SidebarSearch: ', this.props);
    return (
      <div>
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
