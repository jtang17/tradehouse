import React from 'react';
import CustomerSidebar from '../components/customer/CustomerSidebar.jsx';
import MerchantSidebar from '../components/merchant/MerchantSidebar.jsx';
import { connect } from 'react-redux';
import { fetchAllMerchants } from '../actions/merchantActions.jsx';

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
      fetchAllMerchants,
    } = this.props;
    console.log('sidebar container: ', this.props);
    return (
      <div className="sidebar__container">
        {
          this.state.merchant ? <MerchantSidebar /> :
          <CustomerSidebar
            allMerchants={allMerchants}
            fetchAllMerchants={fetchAllMerchants}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allMerchants: state.allMerchants,
});

export default connect(mapStateToProps, { fetchAllMerchants })(Sidebar);
