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
        <Link to="/browse"><h4>Browse Content</h4></Link>
        <SidebarSearchForm
          allMerchants={allMerchants}
          allProducts={allProducts}
          fetchAllMerchants={fetchAllMerchants}
          fetchAllProducts={fetchAllProducts}
        />
        <br />
        <br />
        <button className="btn--nav" onClick={fetchAllMerchants.bind(null)}>Get all Merchants</button>
        <br />
        <br />
        <button className="btn--nav" onClick={fetchAllProducts.bind(null)}>Get all Products</button>
      </div>
    );
  }
}

export default SidebarSearch;
