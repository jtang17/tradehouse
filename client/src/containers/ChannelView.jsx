// React, Redux, React Router
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Components
import StoreItem from '../components/customer/StoreItem.jsx';
import CustomerChat from '../chat/CustomerChat.jsx';
// Actions
import { fetchStreamInfo } from '../actions/broadcastActions.jsx';
import { addToCart } from '../actions/cartActions.jsx';
import { fetchChannelInfo } from '../actions/merchantActions.jsx';
import { fetchSingleProduct } from '../actions/productActions.jsx';
import {
  follow,
  unfollow,
  fetchSubscriptions,
  fetchCustomerInfoByToken,
} from '../actions/customerActions.jsx';

class ChannelView extends React.Component {
  constructor(props) {
    super(props);
    this.followButtonClick = this.followButtonClick.bind(this);
    this.unfollowButtonClick = this.unfollowButtonClick.bind(this);
    this.state = {
      subscribed: false,
    };
  }

  componentDidMount() {
    this.props.fetchStreamInfo(this.props.match.params.merchantId);
    this.props.fetchChannelInfo(this.props.match.params.merchantId)
      .then(() => this.props.fetchSingleProduct(this.props.channelInfo.currentProduct));
    this.props.fetchCustomerInfoByToken()
      .then(() => this.props.fetchSubscriptions(this.props.customerInfo.id))
      .then(() =>
        this.props.subscriptions.forEach((subscription) => {
          if (
            subscription.id.toString() === this.props.match.params.merchantId
          ) {
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
      this.props.follow(
        this.props.customerInfo.id,
        this.props.match.params.merchantId,
      );
      this.setState({
        subscribed: true,
      });
      // THIS SETSTATE NEEDS TO BE REMOVED WHEN FETCH SUBSCRIPTIONS AND PROMISE ARE WORKING PROPERLY
    }
  }

  unfollowButtonClick() {
    this.props.unfollow(
      this.props.customerInfo.id,
      this.props.match.params.merchantId,
    );
    this.setState({
      subscribed: false,
    });
    // THIS SETSTATE NEEDS TO BE REMOVED WHEN FETCH SUBSCRIPTIONS AND PROMISE ARE WORKING PROPERLY
  }

  render() {
    return (
      <div className="singleChannel__container">
        <h2 className="heading singleChannel__heading">
          Viewing: {this.props.streamInfo.storeName || 'Your Store'}
        </h2>

        {this.state.subscribed ? (
          <a className="btn--filter follow" onClick={this.unfollowButtonClick}>
            Unfollow
          </a>
        ) : (
          <a className="btn--filter follow" onClick={this.followButtonClick}>
            Follow
          </a>
        )}
        <h5><Link to={`/store/${this.props.channelInfo.id}`}>
          Visit {this.props.channelInfo.storeName} Store
        </Link>
        </h5>
        <iframe
          width="400"
          height="300"
          src={this.props.streamInfo.url}
          frameBorder="0"
          allowFullScreen
        />
        <h5 style={{ fontStyle: 'italic' }}>
          Broadcast Message: {this.props.channelInfo.broadcastMessage}
        </h5>


        <div className="singleChannel__featuredProduct">
          {this.props.product && (
            <StoreItem
              product={this.props.product}
              addToCart={this.props.addToCart}
              customerInfo={this.props.customerInfo}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  channelInfo: state.channelInfo,
  product: state.singleProduct,
  subscriptions: state.subscriptions,
  customerInfo: state.customerInfo,
  streamInfo: state.streamInfo,
});

const mapDispatchToProps = {
  addToCart,
  fetchChannelInfo,
  fetchSingleProduct,
  follow,
  unfollow,
  fetchSubscriptions,
  fetchCustomerInfoByToken,
  fetchStreamInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelView);
