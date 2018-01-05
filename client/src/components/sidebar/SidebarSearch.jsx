import React from 'react';
import SidebarSearchForm from './SidebarSearchForm.jsx';
import { Link } from 'react-router-dom';

class SidebarSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };

    this.search = this.search.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  search(e) {
    e.preventDefault();
    this.props.searchMixed(this.state.searchTerm);
  }

  onChangeSearch(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  render() {
    const {
      fetchStreamSearch,
      fetchMerchantSearch,
      fetchProductSearch,
    } = this.props;

    return (
      <div className="sidebar__container--search">
        <form onSubmit={this.search}>
          <input className="search__input" onChange={this.onChangeSearch} type="text" name="search" placeholder="Search..." />
          <input className="btn--action sidebar-submit" type="submit" value="Get Results!" />
        </form>
        <Link to="/browse"><h6>Browse All Content</h6></Link>
        <h6 onClick={this.props.fetchAllStreams}>Browse All Streams</h6>
        <h6 onClick={this.props.searchAllMerchants}>Browse All Stores</h6>
        <h6 onClick={this.props.searchAllProducts}>Browse All Products</h6>
      </div>
    );
  }
}

export default SidebarSearch;


// <p className="btn--filter">All</p>
// <p className="btn--filter">Products</p>
// <p className="btn--filter">Streams</p>
// <p className="btn--filter">Merchants</p>
