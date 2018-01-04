import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Featured from './Featured.jsx';
import { fetchCustomerInfoByToken, fetchSubscriptions, fetchWishlist } from '../actions/customerActions.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
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
});

export default connect(mapStateToProps, { fetchCustomerInfoByToken, fetchSubscriptions, fetchWishlist })(Home);
