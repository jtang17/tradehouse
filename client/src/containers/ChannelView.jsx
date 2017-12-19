import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { fetchMerchantInfo } from '../actions/merchantActions.jsx';

class ChannelView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMerchantInfo({id: 1});
  }

  render() {
    //TODO: Need to render merchant information based on this.props.merchantInfo
    return (
      <div>
          Viewing: lofi hiphop radio - <Link to={`/store/${1}`}>Store</Link>
        <br />
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/live_stream?channel=UCSJ4gkVC6NrvII8umztf0Ow&autoplay=1`}
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
  stream: state.stream,
  merchantInfo: state.merchantInfo,
});

export default connect(mapStateToProps, { fetchMerchantInfo })(ChannelView);
