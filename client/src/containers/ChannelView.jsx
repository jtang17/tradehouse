import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import StoreItem from '../components/customer/StoreItem.jsx';
import { addToCart } from '../actions/cartActions.jsx';
import { fetchMerchantInfo } from '../actions/merchantActions.jsx';
import { fetchSingleProduct } from '../actions/productActions.jsx';

class ChannelView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMerchantInfo(this.props.match.params.merchantId)
      .then(() => this.props.fetchSingleProduct(this.props.merchantInfo.currentProduct))
  }

  render() {
    const { merchantInfo } = this.props;

    // TODO: LINK TO CART/CHECKOUT OF LOGGED IN CUSTOMER
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
        <div className="channelFeaturedProduct">
          {this.props.product &&
            <StoreItem product={this.props.product}
              addToCart={this.props.addToCart}
            />
          }
          <Link to={`/checkout/${1}`}>View Cart</Link>
        </div>
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
  product: state.singleProduct,
});

export default connect(mapStateToProps, { addToCart, fetchMerchantInfo, fetchSingleProduct })(ChannelView);
