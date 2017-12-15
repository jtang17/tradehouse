import React from 'react';
import CustomerSidebar from '../components/customer/CustomerSidebar.jsx';
import MerchantSidebar from '../components/merchant/MerchantSidebar.jsx';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    // extrapolate to redux store
    this.state = {
      merchant: false,
    };
  }

  render() {
    return (
      <div className="sidebar__container">
        {
          this.state.merchant ? <MerchantSidebar /> : <CustomerSidebar />
        }
      </div>
    );
  }
}

export default Sidebar;