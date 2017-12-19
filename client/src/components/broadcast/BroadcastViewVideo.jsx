import React from 'react';

const BroadcastViewVideo = props => (
  <div>
    <iframe
      width="204"
      height="126"
      src={props.stream}
      frameBorder="0"
      allowFullScreen
    />
    <p>Broadcast Message: {props.broadcastMessage}</p>
  </div>
);

export default BroadcastViewVideo;
