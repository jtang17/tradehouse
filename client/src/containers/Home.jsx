import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
      <div>
        <Featured video={this.props.featuredVideo} />
        <br />
        <Link to="browse"><h4>Browse Content</h4></Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  featuredVideo: state.featuredVideo,
});

export default connect(null, null)(Home);
