import React from 'react';
import { Redirect } from 'react-router';
import { Auth } from '../Auth/Auth.js';

const auth = new Auth();

import { connect } from 'react-redux';
import { fetchMerchantProducts } from '../actions/productActions.jsx';
import { changeStream, changeBroadcastMessage, selectFeaturedProduct } from '../actions/broadcastActions.jsx';
import { fetchMerchantInfo } from '../actions/merchantActions.jsx';

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
    this.props.fetchMerchantProducts(1);
    this.props.fetchMerchantInfo(1);
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
              changeStream={this.props.changeStream}
              changeBroadcastMessage={this.props.changeBroadcastMessage}
            />
          </div>
          <div className="col">
            <BroadcastViewVideo
              stream={this.props.stream}
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
  products: state.merchantProducts,
  stream: state.stream,
});

const mapDispatchToProps = {
  fetchMerchantProducts, changeStream, changeBroadcastMessage, selectFeaturedProduct, fetchMerchantInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(BroadcastView);
