import React from 'react';

const MerchantOverview = props => (
  <div className="mercOverview__container">
    <h4 className="mercOverview__title"><span>Company Overview</span></h4>
    <span className="mercOverview__profile">
      <section className="mercOverview__profile--part1">
        Company Name:<br />
        Company Website:<br />
        Company Ratings:<br />
        Company Location:<br />
      </section>
      <section className="mercOverview__profile--part2">
        Categories:<br />
        Support E-mail:<br />
        Facebook:<br />
        Twitter:<br />
        Description:<br />
      </section>
    </span>
  </div>
);

export default MerchantOverview;
