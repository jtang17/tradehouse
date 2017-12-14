import React from 'react';
import MerchantOverview from '../components/merchant/MerchantOverview.jsx';
import MerchantStats from '../components/merchant/MerchantStats.jsx';
import { Redirect } from 'react-router';
import { Auth } from '../Auth/Auth';

const auth = new Auth();

class MerchantHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // redirect to home if not logged in, shouldn't be here
    if (!auth.isAuthenticated()) {
      return <Redirect to="/" />;
    }
    return (
      <div className="merchantHome__container">
        <MerchantOverview />
        <MerchantStats />
      </div>
    );
  }
}

export default MerchantHome;
