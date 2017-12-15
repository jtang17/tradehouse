import React from 'react';

const MerchantOverview = props => (
  <div className="mercOverview__container">
    <h4 className="mercOverview__title"><span>Company Overview</span></h4>
    <span className="mercOverview__profile">
      <section className="mercOverview__profile--part1">
        Company Name: {props.merchantInfo.username} <br />
        Company Website: {props.merchantInfo.website} <br />
        Company Ratings: {props.merchantInfo.rating} <br />
        Company Location: {props.merchantInfo.location} <br />
        Categories:<br />
      </section>
      <section className="mercOverview__profile--part2">
        Categories:<br />
        Support E-mail: {props.merchantInfo.email} <br />
        Facebook: {props.merchantInfo.facebook} <br />
        Twitter: {props.merchantInfo.twitter} <br />
        Description: {props.merchantInfo.description} <br />
      </section>
    </span>
  </div>
);

export default MerchantOverview;
