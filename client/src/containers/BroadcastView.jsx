import React from 'react';
import { Redirect } from 'react-router'
import { Auth } from "../Auth/Auth.js";
const auth = new Auth();

import { connect } from 'react-redux';
import { fetchProducts, changeVideo, changeBroadcastMessage } from '../actions/actions.jsx';

import BroadcastViewVideo from '../components/BroadcastViewVideo.jsx';
import VideoControl from '../components/VideoControl.jsx';
import ProductControl from '../components/ProductControl.jsx';

class BroadcastView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: '',
    }
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    if (!auth.isAuthenticated()) {
     return <Redirect to="/"/>
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <VideoControl
              changeVideo={this.props.changeVideo}
              changeBroadcastMessage={this.props.changeBroadcastMessage}
            />
          </div>
          <div className="col">
            <BroadcastViewVideo
              video={this.props.video}
              broadcastMessage={this.props.broadcastMessage}
            />
          </div>
        </div>
        <ProductControl
          products={this.props.products}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.items,
    video: state.video,
    broadcastMessage: state.broadcastMessage,
  }
}

export default connect(mapStateToProps, { fetchProducts, changeVideo, changeBroadcastMessage })(BroadcastView);