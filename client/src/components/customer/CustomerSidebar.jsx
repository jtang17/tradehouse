import React from 'react';

class CustomerSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftTab: true,
    };
    this.handleLeftTabClick = this.handleLeftTabClick.bind(this);
    this.handleRightTabClick = this.handleRightTabClick.bind(this);
  }

  handleLeftTabClick() {
    this.setState({leftTab: true});
  }

  handleRightTabClick() {
    this.setState({leftTab: false});
  }

  render() {
    return (
      <div className="CustomerSidebar">
        <div className="tabs">
          <h3 className="leftTab" onClick={this.handleLeftTabClick}>Chat</h3>
          <h3 className="rightTab" onClick={this.handleRightTabClick}>Search</h3>
        </div>
      </div>
    );
  }
}

export default CustomerSidebar;