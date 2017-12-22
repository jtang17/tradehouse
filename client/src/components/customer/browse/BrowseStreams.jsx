import React from 'react';

import { Link } from 'react-router-dom';

const BrowseStreams = props => (
  <div className="browseStreams__container">

    <ul>
      {props.merchants.map((merchant, index) => (
        <div key={index} className="streamsEntry">
          <Link to={`/channel/${merchant.id || 'Merchant id'}`}>
            <img src={merchant.logo || 'http://clipartandscrap.com/wp-content/uploads/2017/07/Teddy-bear-clip-art-on-teddy-bears-and-clipartwiz-4.png'} style={{ width: '75px' }} />
          </Link>
            <li>{merchant.storeName} <br />
              <span>{merchant.broadcastMessage}</span>
            </li>
          <Link to={`/store/${merchant.id}`}>{merchant.currentProduct}</Link>
        </div>
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
