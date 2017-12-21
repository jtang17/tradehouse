import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import StoreItem from '../components/customer/StoreItem.jsx';
import { addToCart } from '../actions/cartActions.jsx';
import { fetchMerchantInfo } from '../actions/merchantActions.jsx';
import { fetchSingleProduct } from '../actions/productActions.jsx';
import { follow, unfollow, fetchSubscriptions } from '../actions/customerActions.jsx';

class ChannelView extends React.Component {
  constructor(props) {
    super(props);
    this.followButtonClick = this.followButtonClick.bind(this);
    this.unfollowButtonClick = this.unfollowButtonClick.bind(this);
    this.state = {
      subscribed: false,
    }
  }

  componentDidMount() {
    this.props.fetchSubscriptions(1)
      .then(() => {
        this.props.subscriptions.forEach((subscription) => {
          if (subscription.merchantId.toString() === this.props.match.params.merchantId) {
            //customer is subscribed to this merchant.
            //show unfollow button instead of follow.
            console.log('hello');
            console.log(this.state.subscribed);
            this.setState({
              subscribed: true,
            });
            console.log(this.state.subscribed);
          }
        })
      });

    this.props.fetchMerchantInfo(this.props.match.params.merchantId)
      .then(() => this.props.fetchSingleProduct(this.props.merchantInfo.currentProduct));
  }

  followButtonClick() {
    const loggedIn = true;
    if (!loggedIn) {
      alert('Please register or log in.');
    } else {
      this.props.follow(1, this.props.match.params.merchantId);
    }
  }

  unfollowButtonClick() {
    this.props.unfollow(1, this.props.match.params.merchantId);
  }

  render() {
    const { merchantInfo } = this.props;
    // TODO: LINK TO CART/CHECKOUT OF LOGGED IN CUSTOMER
    return (
      <div>
          Viewing: {merchantInfo.storeName} - <Link to={`/store/${merchantInfo.id}`}>Store</Link>
        <br />
        <span style={{ fontStyle: 'italic' }}>{merchantInfo.broadcastMessage}</span>
        <br />
        {this.state.subscribed ?
          <button onClick={this.unfollowButtonClick}>Unfollow</button> :
          <button onClick={this.followButtonClick}>Follow</button>
        }
        <br />
        <iframe
          width="400"
          height="300"
          src={merchantInfo.stream}
          frameBorder="0"
          allowFullScreen
        />
        <div className="channelFeaturedProduct">
          {this.props.product &&
            <StoreItem
              product={this.props.product}
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
  subscriptions: state.subscriptions,
});

const mapDispatchToProps = {
  addToCart, fetchMerchantInfo, fetchSingleProduct, follow, unfollow, fetchSubscriptions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelView);
