import React from 'react';

const MerchantOverview = props => (
  <div className="mercOverview__container">
    <h4>Company Overview</h4>
    <div className="row">
      <div className="col">
          Company Name: {props.merchantInfo.username} <br />
          Company Website: {props.merchantInfo.website} <br />
          Company Ratings: {props.merchantInfo.rating} <br />
          Company Location: {props.merchantInfo.location} <br />
          Categories:<br />
      </div>
      <div className="col">
          Support E-mail: {props.merchantInfo.email} <br />
          Facebook: {props.merchantInfo.facebook} <br />
          Twitter: {props.merchantInfo.twitter} <br />
          Description: {props.merchantInfo.description} <br />
      </div>
    </div>
  </div>
);

export default MerchantOverview;
