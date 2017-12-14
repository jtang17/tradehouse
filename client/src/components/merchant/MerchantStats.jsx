import React from 'react';

const MerchantStats = props => (
  <div className="container">
    <h4>Merchant Statistics</h4>
    <div className="row">
      <div className="col">
        <p> Broadcast Statistics: 1000000 views </p>
      </div>
      <div className="col">
        <p> Sales Statistics: $1023123098 of sales </p>
      </div>
    </div>
    <img src="http://filsingergames.com/wp-content/uploads/2017/01/sales-graph.png" />
  </div>
);

export default MerchantStats;
