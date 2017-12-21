import React from 'react';

const MerchantStats = props => (
  <div className="mercStats__container">
    <h3 className="mercStats__title">Merchant Statistics</h3>
    <div className="mercStats__content">
      <span><section className="mercStats__content--part1">
        Broadcast Statistics: 1000000 views<br />
        Sales Statistics: $1023123098 of sales<br />
        Customers from Afghanistan: 23<br />
        Customers from South Korean: 2,400<br />
        Customers Avg Spend: $76.00<br />
        Customers Age Group: 29-48<br />
        Customers Browser: Firefox<br />
      </section></span>
      <section className="mercStats__content--part2">
        <img src="http://filsingergames.com/wp-content/uploads/2017/01/sales-graph.png" />
      </section>
    </div>
  </div>
);

export default MerchantStats;
