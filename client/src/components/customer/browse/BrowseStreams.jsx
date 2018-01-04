import React from 'react';

import { Link } from 'react-router-dom';

const BrowseStreams = props => (
  <div className="browseStreams__container">

    <ul>
      {props.merchants.map((merchant, index) => (
        <Link key={index} to={`/channel/${merchant.id || 1}`}>
          <div className="streamsEntry__card">
            <div className="streamsTitle__card">
              <h5>{merchant.storeName}</h5>
              <p>Rating: {merchant.rating}</p>
              <p>Website: {merchant.website}</p>
            </div>
            <img className="mercLogo__browser" src={merchant.logo || 'http://clipartandscrap.com/wp-content/uploads/2017/07/Teddy-bear-clip-art-on-teddy-bears-and-clipartwiz-4.png'} style={{ width: '75px' }} />
            <div className="streamsDescription__card">
              <p>Broadcast Message: {merchant.broadcastMessage}</p>
            </div>
          </div>
        </Link>
      ))}
    </ul>

  </div>
);

export default BrowseStreams;

// {props.streams.map((stream, index) => {
//   return (
//     <div key={index}>
//       <Link to={`/channel/${stream.id}`}>{stream.title}</Link>
//     </div>
//   );
// })}
