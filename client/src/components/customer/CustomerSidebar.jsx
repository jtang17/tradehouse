import React from 'react';

class CustomerSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftSide: true,
    };
  }

  render() {
    return (
      <div className="CustomerSidebar">
        <div className="tabs">
          <h3>Chat</h3>
          <h3>Search</h3>
        </div>
      </div>
    );
  }
}

export default CustomerSidebar;