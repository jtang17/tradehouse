import React from 'react';
import { Redirect } from 'react-router';
import { Auth } from '../Auth/Auth.js';

const auth = new Auth();

import { connect } from 'react-redux';
import { fetchAllProducts } from '../actions/productActions.jsx';
import { changeVideo, changeBroadcastMessage, selectFeaturedProduct } from '../actions/broadcastActions.jsx';

import BroadcastViewVideo from '../components/broadcast/BroadcastViewVideo.jsx';
import VideoControl from '../components/broadcast/VideoControl.jsx';
import ProductControl from '../components/broadcast/ProductControl.jsx';

class BroadcastView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: '',
      test: 'test',
    };
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    if (!auth.isAuthenticated()) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <VideoControl
              changeVideo={this.props.changeStream}
              changeBroadcastMessage={this.props.changeBroadcastMessage}
            />
          </div>
          <div className="col">
            <BroadcastViewVideo
              video={this.props.stream}
              broadcastMessage={this.props.broadcastMessage}
            />
          </div>
        </div>
        <ProductControl
          featuredProduct={this.props.featuredProduct}
          products={this.props.products}
          selectFeaturedProduct={this.props.selectFeaturedProduct}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  broadcastMessage: state.broadcastMessage,
  featuredProduct: state.featuredProduct,
  products: state.products,
  stream: state.stream,
});

export default connect(mapStateToProps, {
  fetchAllProducts, changeStream, changeBroadcastMessage, selectFeaturedProduct,
})(BroadcastView);
