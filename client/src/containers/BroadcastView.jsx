import React from 'react';
import { Redirect } from 'react-router';
import { Auth } from '../Auth/Auth.js';

const auth = new Auth();

import { connect } from 'react-redux';
// Actions
import { fetchMerchantProducts } from '../actions/productActions.jsx';
import {
  changeStream,
  changeBroadcastMessage,
  selectFeaturedProduct,
  fetchStreamInfo,
  editStreamInfo,
} from '../actions/broadcastActions.jsx';
import {
  fetchMerchantInfoByToken,
  fetchMerchantInfo,
} from '../actions/merchantActions.jsx';
// Components
import BroadcastViewVideo from '../components/broadcast/BroadcastViewVideo.jsx';
import VideoControl from '../components/broadcast/VideoControl.jsx';
import ProductControl from '../components/broadcast/ProductControl.jsx';
import MerchantChat from '../chat/MerchantChat.jsx';

class BroadcastView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMerchantInfoByToken()
      .then(() => this.props.fetchMerchantProducts(this.props.merchantInfo.id))
      .catch(err => console.error(err))
      .then(() => this.props.fetchStreamInfo(this.props.merchantInfo.id))
      .catch(err => console.error(err));
  }

  render() {
    if (!auth.isAuthenticated()) {
      return <Redirect to="/" />;
    }
    return (
      <div className="broadcastView__container">
        <h3 className="broadcast-header">{this.props.merchantInfo.storeName || 'Your Store.'}</h3>
        <BroadcastViewVideo
          streamUrl={this.props.streamInfo.url}
        />
        <VideoControl
          merchantId={this.props.merchantInfo.id}
          editStreamInfo={this.props.editStreamInfo}
          broadcastMessage={this.props.streamInfo.broadcastMessage}
        />
        <ProductControl
          merchantId={this.props.merchantInfo.id}
          featuredProduct={this.props.featuredProduct}
          products={this.props.products}
          editStreamInfo={this.props.editStreamInfo}
          selectFeaturedProduct={this.props.selectFeaturedProduct}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  featuredProduct: state.featuredProduct,
  products: state.merchantProducts,
  merchantInfo: state.merchantInfo,
  streamInfo: state.streamInfo,
});

const mapDispatchToProps = {
  fetchMerchantProducts,
  changeStream,
  changeBroadcastMessage,
  selectFeaturedProduct,
  fetchMerchantInfo,
  fetchMerchantInfoByToken,
  fetchStreamInfo,
  editStreamInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(BroadcastView);
