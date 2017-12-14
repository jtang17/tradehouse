import React from 'react';

class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <a className="channelViewLink" href="/ChannelView">
              <h4>Featured Broadcast: QVC Live Stream</h4>
            </a>
            <iframe
              width="448"
              height="252"
              src="https://www.youtube.com/embed/live_stream?channel=UCW4gXUEypFeI3xgoQ27LFBA&autoplay=1"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div>
          Description: Subscribe to QVC for the inside scoop and helpful how-to videos from the who's who in the shopping and entertainment world!
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
