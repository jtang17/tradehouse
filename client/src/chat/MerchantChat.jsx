import React from 'react';
import openSocket from 'socket.io-client';
/* import { subscribeToTimer } from './merchantAPI';*/

const port = process.env.PORT || 5421;
const socket = openSocket(`http://localhost:${port}`); // TODO: fix for deployment?

class MerchantChat extends React.Component {
  constructor(props) {
    super(props);
    /* socket.on('timer', timestamp => cb(null, timestamp));*/
    /* socket.emit('subscribeToTimer', 1000);*/
    this.state = {
      timestamp: 'no timestamp yet',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.subscribeToTimer = this.subscribeToTimer.bind(this);
  }

  componentDidMount() {
    this.subscribeToTimer(1000, (err, timestamp) => this.setState({
      timestamp,
    }));
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: '' });
  }

  subscribeToTimer(interval, cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
  }

  render() {
    return (
      <div className="chatTest">
        {this.state.timestamp}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default MerchantChat;
