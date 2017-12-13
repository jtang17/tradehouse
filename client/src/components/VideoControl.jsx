import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class VideoControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      broadcastMessage: '',
    }
    this.onIdSubmit = this.onIdSubmit.bind(this);
    this.onIdChanged = this.onIdChanged.bind(this);
    this.onBroadcastMessageSubmit = this.onBroadcastMessageSubmit.bind(this);
    this.onBroadcastMessageChanged = this.onBroadcastMessageChanged.bind(this);
  }

  onIdSubmit(e) {
    e.preventDefault();
    this.props.changeVideo(this.state.id);
    this.setState({
      id: '',
    });
  }

  onIdChanged(e) {
    this.setState({
      id: e.target.value,
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
        <form onSubmit={this.onIdSubmit}>
          <label>Enter Youtube Channel ID</label>
          <input type="text" placeholder="Youtube Channel ID..." onChange={this.onIdChanged} value={this.state.url} />
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.onBroadcastMessageSubmit}>
          <label>Enter Broadcast Message</label>
          <input type="text" placeholder="Broadcast Message..." onChange={this.onBroadcastMessageChanged} value={this.state.broadcastMessage} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default VideoControl;