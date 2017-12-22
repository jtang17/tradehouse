import React from 'react';
import { Redirect } from 'react-router';
import { Auth } from '../Auth/Auth.js';

const auth = new Auth();

import { connect } from 'react-redux';
import { fetchMerchantProducts } from '../actions/productActions.jsx';
import { changeStream, changeBroadcastMessage, selectFeaturedProduct } from '../actions/broadcastActions.jsx';
import { fetchMerchantInfo } from '../actions/merchantActions.jsx';
import { fetchMerchantInfoByToken } from '../actions/merchantActions.jsx';

import BroadcastViewVideo from '../components/broadcast/BroadcastViewVideo.jsx';
import VideoControl from '../components/broadcast/VideoControl.jsx';
import ProductControl from '../components/broadcast/ProductControl.jsx';
import MerchantChat from '../chat/MerchantChat.jsx';

class BroadcastView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: '',
      test: 'test',
    };
  }

  componentDidMount() {
    // TODO: fetch currently logged in merchant's products and info
    /* this.props.fetchMerchantProducts(1); */
    /* this.props.fetchMerchantInfo(1); */
    this.props.fetchMerchantInfoByToken()
      .then(this.props.fetchMerchantProducts(this.props.merchantInfo.id));
  }

  render() {
    if (!auth.isAuthenticated()) {
      return <Redirect to="/" />;
    }
    return (
      <div className="broadcastView__container">
        <h3 className="broadcast-header">{this.props.merchantInfo.storeName || 'Alex\'s Store.'}</h3>
        <BroadcastViewVideo
          stream={this.props.merchantInfo.stream}
        />
        <VideoControl
          changeStream={this.props.changeStream}
          changeBroadcastMessage={this.props.changeBroadcastMessage}
          broadcastMessage={this.props.broadcastMessage}
        />
        <ProductControl
          featuredProduct={this.props.featuredProduct}
          products={this.props.products}
          selectFeaturedProduct={this.props.selectFeaturedProduct}
        />
        <MerchantChat />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  broadcastMessage: state.broadcastMessage,
  featuredProduct: state.featuredProduct,
  products: state.merchantProducts,
  merchantInfo: state.merchantInfo,
});

const mapDispatchToProps = {
  fetchMerchantProducts, changeStream, changeBroadcastMessage, selectFeaturedProduct, fetchMerchantInfo, fetchMerchantInfoByToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(BroadcastView);
