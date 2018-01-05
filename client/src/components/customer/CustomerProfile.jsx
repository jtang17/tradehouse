import React from 'react';

const CustomerProfile = props => (
  <div className="customerProfile__container">
    <h4>Customer Profile</h4>
    <div>Username: {props.customerInfo.username}</div>
    <div>E-mail: {props.customerInfo.email}</div>
    <div>
      <h6>Followed Channels</h6>
      {props.subscriptions.map((subscription, index) => (
        <div>{subscription.storeName}</div>
      ))}
      <h6>Wishlisted Products</h6>
      {props.wishlist.map((product, index) => (
        <div>{product.title}</div>
      ))}
    </div>
  </div>
);

export default CustomerProfile;
