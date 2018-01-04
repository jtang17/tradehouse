import React from 'react';
import openSocket from 'socket.io-client';
/* import { subscribeToTimer } from './merchantAPI'; */

const port = process.env.PORT || 5421;
/* const socket = openSocket(`http://localhost:${port}`); // TODO: fix for deployment?*/

class MerchantChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    const merchantChatContext = this;
    /* socket.on('chat message', (msg) => {*/
    /* merchantChatContext.setState({ messages: merchantChatContext.state.messages.concat(msg) });*/
    /* });*/
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    /* socket.emit('chat message', this.state.value);*/
    this.setState({ value: '' });
  }

  render() {
    return (
      <div className="chatTest">
        {this.state.messages.map(msg => (
          <div>{msg}</div>
        ))}
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
