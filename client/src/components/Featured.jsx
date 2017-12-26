import React from 'react';

import { Link } from 'react-router-dom';

class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="featuredBroadcast__container">

        <Link to={`/channel/${1}`}> <h1 className="container-header">Featured Broadcast: Core Koans</h1></Link>

        <div className="featuredVid__container">
          <iframe
            src="https://www.youtube.com/embed/live_stream?channel=UCSJ4gkVC6NrvII8umztf0Ow"
            height="450"
            width="600"
            frameBorder="0"
            scrolling="no"
            allowFullScreen="true"
          />
        </div>

        <div className="featured__description">
          <h3>Description:</h3>
          <p>Subscribe to Core Koans for the inside scoop on all the
          best deals!
          </p>
        </div>
      </div>
    );
  }
  // comment
}

/*
        <div className="featuredChat__container">
          <iframe
            className="featured__chat"
            frameBorder="0"
            scrolling="no"
            id="chat_embed"
            src="https://www.twitch.tv/embed/datjoncat/chat"
            height="100%"
            width="300"
          />
        </div>
*/
export default Featured;
