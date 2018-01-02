import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Featured from '../components/Featured.jsx';
import { fetchCustomerInfoByToken, fetchSubscriptions, fetchWishlist } from '../actions/customerActions.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCustomerInfoByToken()
      .then(() => this.props.fetchSubscriptions(this.props.customerInfo.id))
      .then(() => this.props.fetchWishlist(this.props.customerInfo.id));
  }

  render() {
    return (
      <div>
        <Featured video={this.props.featuredVideo} />
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  featuredVideo: state.featuredVideo,
  customerInfo: state.customerInfo,
  wishlist: state.wishlist,
});

export default connect(mapStateToProps, { fetchCustomerInfoByToken, fetchSubscriptions, fetchWishlist })(Home);
