import React from 'react';

const BroadcastViewVideo = props => (
  <div className="broadcast__video">
    <iframe
      width="300px"
      height="200px"
      src={props.stream}
      frameBorder="0"
      allowFullScreen
    />
  </div>
);

export default BroadcastViewVideo;
