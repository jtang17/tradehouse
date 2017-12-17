import React from 'react';
import SidebarSearchForm from './SidebarSearchForm.jsx';

class SidebarSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      allMerchants,
      fetchAllMerchants,
    } = this.props;
    console.log('SidebarSearch: ',this.props);
    return (
      <div>
        <SidebarSearchForm
          allMerchants={allMerchants}
          fetchAllMerchants={fetchAllMerchants}
        />
      </div>
    );
  }
}

export default SidebarSearch;
