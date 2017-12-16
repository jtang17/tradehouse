import React from 'react';

class CustomerSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftTab: true,
    };
  }

  render() {
    return (
      <div className="CustomerSidebar">
        <div className="tabs">
          <h3 className="leftTab">Chat</h3>
          <h3 className="rightTab">Search</h3>
        </div>
      </div>
    );
  }
}

export default CustomerSidebar;