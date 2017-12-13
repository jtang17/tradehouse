import React from 'react';
import { Redirect } from 'react-router';
import { Auth } from '../Auth/Auth';

const auth = new Auth();

class CustomerHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // redirect to home if not logged in, shouldn't be here
    if (!auth.isAuthenticated()) {
     return <Redirect to="/" />
    }
    return (
      <div>
        <MerchantOverview />
        <MerchantStats />
      </div>
    )
  }
}

export default MerchantHome;
