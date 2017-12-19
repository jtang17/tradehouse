import React from 'react';
import { Link } from 'react-router-dom';

class SidebarCustomerDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="browse"><h4>Browse Content</h4></Link>
        <h1>Dashboard Test</h1>
      </div>
    );
  }
}

export default SidebarCustomerDashboard;
