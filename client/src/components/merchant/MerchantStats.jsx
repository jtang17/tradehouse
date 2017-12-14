import React from 'react';

const MerchantStats = props => (
  <div className="mercStats__container">
    <h4 className="mercStats__title"><span>Merchant Statistics</span></h4>
    <div className="mercStats__content">
      <section className="mercStats__content--part1">
        <p> Broadcast Statistics: 1000000 views </p>
        <p> Sales Statistics: $1023123098 of sales </p>
        <p> Customers from Afghanistan: 23</p>
        <p> Customers from South Korean: 2,400</p>
        <p> Customers Avg Spend: $76.00</p>
        <p> Customers Age Group: 29-48</p>
        <p> Customers Browser: Firefox</p>

      </section>
      <section className="mercStats__content--part2">
        <img src="http://filsingergames.com/wp-content/uploads/2017/01/sales-graph.png" />
      </section>
    </div>
  </div>
);

export default MerchantStats;
