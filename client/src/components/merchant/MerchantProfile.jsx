import React from 'react';

const CustomerProfile = props => (
  <div className="container">
    <h4>Customer Overview</h4>
    <div className="row">
      <div className="col">
        Username: {props.customerInfo.username}
        <br />
        Email: {props.customerInfo.email}
        <br />
      </div>
    </div>
  </div>
);

export default CustomerProfile;
