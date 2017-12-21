import React from 'react';
import { Link } from 'react-router-dom';

class SidebarCustomerDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="browse"><a>Browse Content</a></Link>
      </div>
    );
  }
}

export default SidebarCustomerDashboard;
        // <h1>Dashboard Test</h1>