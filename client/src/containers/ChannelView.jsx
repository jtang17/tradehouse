import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import StoreItem from '../components/customer/StoreItem.jsx';
import { fetchMerchantInfo } from '../actions/merchantActions.jsx';
import { fetchFeaturedProduct } from '../actions/broadcastActions.jsx';

class ChannelView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMerchantInfo(this.props.match.params.merchantId);
    // want to render the featured product on this page as well
  }

  render() {
    const { merchantInfo } = this.props;
    console.log(merchantInfo);
    // TODO: Need to render merchant information based on this.props.merchantInfo
    return (
      <div>
          Viewing: {merchantInfo.username} - <Link to={`/store/${merchantInfo.id}`}>Store</Link>
        <br />
        {merchantInfo.broadcastMessage}
        <br />
        <iframe
          width="560"
          height="315"
          src={merchantInfo.stream}
          frameBorder="0"
          allowFullScreen
        />
        <ul id="messages" />
        <form action="">
          <input id="m" autoComplete="off" /><button>Send</button>
        </form>
        <script src="/socket.io/socket.io.js" />
        <script>
            var socket = io();
        </script>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  merchantInfo: state.merchantInfo,
  product: state.featuredProduct,
});

export default connect(mapStateToProps, { fetchMerchantInfo, fetchFeaturedProduct })(ChannelView);
