import React from 'react';
import SidebarSearchForm from './SidebarSearchForm.jsx';

class SidebarSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SidebarSearchForm />
      </div>
    );
  }
}

export default SidebarSearch;
