import React from 'react';

const BroadcastViewVideo = props => (
  <div>
    <iframe
      width="400"
      height="300"
      src={props.stream}
      frameBorder="0"
      allowFullScreen
    />
    <p>Broadcast Message: {props.broadcastMessage}</p>
  </div>
);

export default BroadcastViewVideo;
