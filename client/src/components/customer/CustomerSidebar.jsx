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
        <h1>Customer Test</h1>
      </div>
    );
  }
}

export default CustomerSidebar;