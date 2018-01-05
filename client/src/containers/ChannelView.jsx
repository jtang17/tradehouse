// React, Redux, React Router
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Components
import StoreItem from '../components/customer/StoreItem.jsx';
import CustomerChat from '../chat/CustomerChat.jsx';
// Actions
import { addToCart } from '../actions/cartActions.jsx';
import { fetchChannelInfo } from '../actions/merchantActions.jsx';
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

  componentDidMount() {
    this.props.fetchChannelInfo(this.props.match.params.merchantId)
      .then(() => this.props.fetchSingleProduct(this.props.channelInfo.currentProduct));
    this.props.fetchCustomerInfoByToken()
      .then(() => this.props.fetchSubscriptions(this.props.customerInfo.id))
      .then(() => this.props.subscriptions.forEach((subscription) => {
        if (subscription.id.toString() === this.props.match.params.merchantId) {
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
    console.log(this.props.channelInfo)
    return (
      <div>
          Viewing: {this.props.channelInfo.storeName || 'Your Store'} - <Link to={`/store/${this.props.channelInfo.id}`}>Visit {this.props.channelInfo.storeName} Store</Link>
        <br />
        <span style={{ fontStyle: 'italic' }}>{this.props.channelInfo.broadcastMessage}</span>
        <br />

        {this.state.subscribed ?
          <button onClick={this.unfollowButtonClick}>Unfollow</button> :
          <button onClick={this.followButtonClick}>Follow</button>
        }
        <br />

        <iframe
          width="400"
          height="300"
          src={this.props.channelInfo.stream}
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  channelInfo: state.channelInfo,
  product: state.singleProduct,
  subscriptions: state.subscriptions,
  customerInfo: state.customerInfo,
});

const mapDispatchToProps = {
  addToCart,
  fetchChannelInfo,
  fetchSingleProduct,
  follow,
  unfollow,
  fetchSubscriptions,
  fetchCustomerInfoByToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelView);
