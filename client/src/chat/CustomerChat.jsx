import React from 'react';
import { subscribeToTimer } from './customerAPI';

class CustomerChat extends React.Component {
  constructor(props) {
    super(props);
    subscribeToTimer(1000, (err, timestamp) => this.setState({
      timestamp,
    }));
  }

  state = {
    timestamp: 'no timestamp yet',
  };

  render() {
    return (
      <div className="chatTest">
      {this.state.timestamp}
    </div>
    );
  }
}

export default CustomerChat;
