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
          <h2>Featured Broadcast: Core Koans</h2>
        </Link>
        <iframe
          src="http://player.twitch.tv/?channel=datjoncat&muted=true"
          height="300"
          width="400"
          frameBorder="0"
          scrolling="no"
          allowFullScreen="true"
        />
        <iframe
          style={{ float: 'right' }}
          frameBorder="0"
          scrolling="no"
          id="chat_embed"
          src="http://www.twitch.tv/embed/datjoncat/chat"
          height="400"
          width="200"
        />
        <div className="featured__description">
          Description: Subscribe to Core Koans for the inside scoop on all the best deals!
        </div>
      </div>
    );
  }
}

export default Featured;
