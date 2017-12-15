import React from 'react';

class MerchantSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftSide: true,
    };
  }

  render() {
    return (
      <div className="MerchantSidebar">
        <h1>Merchant Test</h1>
      </div>
    );
  }
}

export default MerchantSidebar;