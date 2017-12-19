import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class VideoControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streamUrl: '',
      broadcastMessage: '',
    };
    this.onUrlSubmit = this.onUrlSubmit.bind(this);
    this.onUrlChanged = this.onUrlChanged.bind(this);
    this.onBroadcastMessageSubmit = this.onBroadcastMessageSubmit.bind(this);
    this.onBroadcastMessageChanged = this.onBroadcastMessageChanged.bind(this);
  }

  onUrlSubmit(e) {
    e.preventDefault();
    this.props.changeStream(this.state.streamUrl);
    this.setState({
      streamUrl: '',
    });
  }

  onUrlChanged(e) {
    this.setState({
      streamUrl: e.target.value,
    });
  }

  onBroadcastMessageSubmit(e) {
    e.preventDefault();
    this.props.changeBroadcastMessage(this.state.broadcastMessage);
    this.setState({
      broadcastMessage: '',
    });
  }

  onBroadcastMessageChanged(e) {
    this.setState({
      broadcastMessage: e.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onUrlSubmit}>
          <label>Enter Stream Url</label>
          <input
            type="text"
            placeholder="Stream URL..."
            onChange={this.onUrlChanged}
            value={this.state.streamUrl}
          />
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.onBroadcastMessageSubmit}>
          <label>Enter Broadcast Message</label>
          <input
            type="text"
            placeholder="Broadcast Message..."
            onChange={this.onBroadcastMessageChanged}
            value={this.state.broadcastMessage}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default VideoControl;
