import React from 'react';
import { connect } from 'react-redux';

import Featured from '../components/Featured.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.getFeaturedVideo()
    // need to store featured video on server/db
  }

  render() {
    return (
      <Featured video={this.props.featuredVideo} />
    );
  }
}

const mapStateToProps = state => ({
  featuredVideo: state.featuredVideo,
});

export default connect(null, null)(Home);
