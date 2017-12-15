import React from 'react';
import { connect } from 'react-redux';

const ChannelID = 'UCSJ4gkVC6NrvII8umztf0Ow';

const ChannelView = props => (
  <div>
      Viewing: lofi hiphop radio - <a href="/store">Store</a>
    <br />
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/live_stream?channel=${ChannelID}&autoplay=1`}
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

const mapStateToProps = state => ({
  video: state.video,
});

export default connect(mapStateToProps, null)(ChannelView);
