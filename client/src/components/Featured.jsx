import React from 'react';

import { Link } from 'react-router-dom';

class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="featuredBroadcast__container">
        <Link to={`/channel/${1}`} className="channelViewLink">
          <h2>Featured Broadcast: QVC Live Stream</h2>
        </Link>
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
