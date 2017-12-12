import React from 'react';
import CompanyStats from '../components/CompanyStats.jsx';

class MerchantHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <h4>Company Overview</h4>
          <div className="row">
            <div className="col">
            Company Name:<br/>
            Company Website:<br/>
            Company Ratings:<br/>
            Company Location:<br/>
            Categories:<br/>
            </div>
            <div className="col">
            Support E-mail:<br/>
            Facebook:<br/>
            Twitter:<br/>
            Description:<br/>
            </div>
          </div>
        </div>
        <CompanyStats />
      </div>
    )
  }
}

export default MerchantHome;