// React, Redux, React Router
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Components
import StoreItem from '../components/customer/StoreItem.jsx';
import CustomerChat from '../chat/CustomerChat.jsx';
// Actions
import { addToCart } from '../actions/cartActions.jsx';
import { fetchMerchantInfo } from '../actions/merchantActions.jsx';
import { fetchSingleProduct } from '../actions/productActions.jsx';
import { follow, unfollow, fetchSubscriptions, fetchCustomerInfoByToken } from '../actions/customerActions.jsx';

class ChannelView extends React.Component {
  constructor(props) {
    super(props);
    this.followButtonClick = this.followButtonClick.bind(this);
    this.unfollowButtonClick = this.unfollowButtonClick.bind(this);
    this.state = {
      subscribed: false,
    };
  }

  componentWillMount() {
    console.log('props', this.props);
    this.props.fetchMerchantInfo(this.props.match.params.merchantId)
      .then(() => this.props.fetchSingleProduct(this.props.merchantInfo.currentProduct));
    this.props.fetchCustomerInfoByToken()
      .then(() => this.props.fetchSubscriptions(this.props.customerInfo.id))
      .then(() => this.props.subscriptions.forEach((subscription) => {
        if (subscription.merchantId.toString() === this.props.match.params.merchantId) {
          this.setState({
            subscribed: true,
          });
        }
      }));
  }

  followButtonClick() {
    const loggedIn = true;
    if (!loggedIn) {
      alert('Please register or log in.');
    } else {
      this.props.follow(this.props.customerInfo.id, this.props.match.params.merchantId);
      this.setState({
        subscribed: true,
      });
    // THIS SETSTATE NEEDS TO BE REMOVED WHEN FETCH SUBSCRIPTIONS AND PROMISE ARE WORKING PROPERLY
    }
  }

  unfollowButtonClick() {
    this.props.unfollow(this.props.customerInfo.id, this.props.match.params.merchantId);
    this.setState({
      subscribed: false,
    });
    // THIS SETSTATE NEEDS TO BE REMOVED WHEN FETCH SUBSCRIPTIONS AND PROMISE ARE WORKING PROPERLY
  }

  render() {
    return (
      <div>
          Viewing: {this.props.merchantInfo.storeName || 'Your Store'} - <Link to={`/store/${this.props.merchantInfo.id}`}>Visit {this.props.merchantInfo.storeName} Store</Link>
        <br />
        <span style={{ fontStyle: 'italic' }}>{this.props.merchantInfo.broadcastMessage}</span>
        <br />

        {this.state.subscribed ?
          <button onClick={this.unfollowButtonClick}>Unfollow</button> :
          <button onClick={this.followButtonClick}>Follow</button>
        }
        <br />

        <iframe
          width="400"
          height="300"
          src={this.props.merchantInfo.stream}
          frameBorder="0"
          allowFullScreen
        />

        <div className="channelFeaturedProduct">
          {this.props.product &&
            <StoreItem
              product={this.props.product}
              addToCart={this.props.addToCart}
              customerInfo={this.props.customerInfo}
            />
          }
        </div>

      {/*Socket.io */}
        <ul id="messages" />
        <form action="">
          <input id="m" autoComplete="off" /><button>Send</button>
        </form>
        <CustomerChat />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  merchantInfo: state.merchantInfo,
  product: state.singleProduct,
  subscriptions: state.subscriptions,
  customerInfo: state.customerInfo,
});

const mapDispatchToProps = {
  addToCart, fetchMerchantInfo, fetchSingleProduct, follow, unfollow, fetchSubscriptions, fetchCustomerInfoByToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelView);
