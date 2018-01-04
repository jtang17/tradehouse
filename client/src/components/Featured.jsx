import React from 'react';

import { Link } from 'react-router-dom';

class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="featuredBroadcast__container">
        <h1 className="container-header">Best Global Market</h1>

        <div className="featuredVid__container">
          <p>
            <h5>Merchants</h5>
            Best Global market is an interactive platform that allows merchants to broadcast and sell products to their customers.  If you're interested in selling you products, register as a merchant!
            <br />
          </p>
          <p>
            <h5>Customers</h5>
            Customers can watch live streams of products and merchants they are interested in and make instant purchases.  If you're interested in shopping on Best Global Market or following your favorite channels, register as a customer!
          </p>
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
