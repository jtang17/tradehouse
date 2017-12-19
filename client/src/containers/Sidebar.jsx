import React from 'react';
import CustomerSidebar from '../components/customer/CustomerSidebar.jsx';
import MerchantSidebar from '../components/merchant/MerchantSidebar.jsx';
import { connect } from 'react-redux';
import { fetchAllMerchants } from '../actions/merchantActions.jsx';
import { fetchAllProducts } from '../actions/productActions.jsx';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    // extrapolate to redux store
    this.state = {
      merchant: false,
    };
  }

  render() {
    const {
      allMerchants,
      allProducts,
      fetchAllMerchants,
      fetchAllProducts,
    } = this.props;
    return (
      <div className="sidebar__container">
        {
          this.state.merchant ? <MerchantSidebar /> :
          <CustomerSidebar
            allMerchants={allMerchants}
            allProducts={allProducts}
            fetchAllMerchants={fetchAllMerchants}
            fetchAllProducts={fetchAllProducts}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allMerchants: state.allMerchants,
  allProducts: state.allProducts,
});

export default connect(mapStateToProps, { fetchAllMerchants, fetchAllProducts })(Sidebar);
