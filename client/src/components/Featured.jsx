import React from 'react';

class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="featuredBroadcast__container">
        <a className="channelViewLink" href="/ChannelView">
          <h2>Featured Broadcast: QVC Live Stream</h2>
        </a>
        <iframe
          width="448"
          height="252"
          src="https://www.youtube.com/embed/live_stream?channel=UCW4gXUEypFeI3xgoQ27LFBA&autoplay=1"
          frameBorder="0"
          allowFullScreen
        />
        <div className="featured__description">
          Description: Subscribe to QVC for the inside scoop and helpful how-to videos from the who's who in the shopping and entertainment world!
        </div>
      </div>
    );
  }
}

export default Featured;
