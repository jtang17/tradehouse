import React from 'react';
import { connect } from 'react-redux';

const ChannelID = 'UCSJ4gkVC6NrvII8umztf0Ow';

const CustomerView = props => {
  return (
    <div>
      Viewing: {props.video}
      <br />
      <iframe
        width="560" height="315"
        src={`https://www.youtube.com/embed/live_stream?channel=${ChannelID}&autoplay=1`}
        frameBorder="0"
        allowFullScreen>
      </iframe>
      <ul id="messages"></ul>
      <form action="">
        <input id="m" autocomplete="off" /><button>Send</button>
      </form>
      <script src="/socket.io/socket.io.js"></script>
      <script>
        var socket = io();
      </script>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    video: state.video
  }
}

export default connect(mapStateToProps, null)(CustomerView);
