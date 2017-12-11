import React from 'react';

class MerchantHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <a href="/ProductsView">Manage Store</a>
        <br />
        <a href="/BroadcastView">Broadcast</a>
      </div>
    )
  }

}

export default MerchantHome;