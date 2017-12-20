import React from 'react';

import { Link } from 'react-router-dom';

const BrowseStreams = props => (
  <div className="browseStreams__container">
    <h4>Stream Browser</h4>
    <ul>
      {props.merchants.map((merchant, index) => (
        <div key={index} className="streamsEntry">
          <Link to={`/channel/${merchant.id}`}>
            <img src={merchant.logo} style={{ width: '75px' }} />
            <li>{merchant.storeName} <br />
              <span style={{ fontStyle: 'italic' }}>{merchant.broadcastMessage}</span>
            </li>
          </Link>
          <Link to={`/store/${merchant.id}`}>Store</Link>
        </div>
      ))}
    </ul>
    TEMPLATE:
    <div className="streamsEntry">
      <Link to={`/channel/${1}`}>
        <img src="https://i.ytimg.com/vi/D6dMyx3bpco/hqdefault_live.jpg" style={{ width: '75px' }} />
        <li>Lofi hip hop radio - the chillest beats 24/7</li>
      </Link>
      <Link to={`/store/${1}`}>Store</Link>
    </div>
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
