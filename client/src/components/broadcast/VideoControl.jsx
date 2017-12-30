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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onUrlSubmit(e) {
    e.preventDefault();
    this.props.changeStream(this.state.streamUrl, this.props.merchantId);
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
    this.props.changeBroadcastMessage(this.state.broadcastMessage, this.props.merchantId);
    this.setState({
      broadcastMessage: '',
    });
  }

  onBroadcastMessageChanged(e) {
    this.setState({
      broadcastMessage: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editStreamInfo(this.props.merchantId, {
      streamUrl: this.state.streamUrl,
      broadcastMessage: this.state.broadcastMessage,
    });
    this.setState({
      streamUrl: '',
      broadcastMessage: '',
    });
  }

  render() {
    return (
      <div className="videoControls__container">
        <h5>Broadcast Message:<span>{this.props.broadcastMessage}</span></h5>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Broadcast Message</label>
          <input
            type="text"
            placeholder="Broadcast Message..."
            onChange={this.onBroadcastMessageChanged}
            value={this.state.broadcastMessage}
          />
          <input className="btn--action" type="submit" value="Submit" />
        </form>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Stream Url</label>
          <input
            type="text"
            placeholder="Stream URL..."
            onChange={this.onUrlChanged}
            value={this.state.streamUrl}
          />
          <input className="btn--action" type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default VideoControl;
