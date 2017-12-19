import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { fetchMerchantInfo } from '../actions/merchantActions.jsx';

class ChannelView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMerchantInfo(1);
  }

  render() {
    const { merchantInfo } = this.props;
    console.log(merchantInfo);
    //TODO: Need to render merchant information based on this.props.merchantInfo
    return (
      <div>
          Viewing: {merchantInfo.username} - <Link to={`/store/${merchantInfo.id}`}>Store</Link>
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
    )
  };
};

const mapStateToProps = state => ({
  merchantInfo: state.merchantInfo,
});

export default connect(mapStateToProps, { fetchMerchantInfo })(ChannelView);
