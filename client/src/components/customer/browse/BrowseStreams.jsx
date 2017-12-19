import React from 'react';

import { Link } from 'react-router-dom';

const BrowseStreams = props => (
  <div>
    <h4>Stream Browser</h4>
    <ul>
    {props.merchants.map((merchant, index) => {
      return (
        <div key={index} className="streamsEntry">
          <Link to={`/channel/${merchant.id}`}>
            <img src={merchant.logo}></img>
            <li>{merchant.username} - {merchant.broadcastMessage}</li>
          </Link>
          <Link to={`/store/${merchant.id}`}>Store</Link>
        </div>
      )
    })}
    </ul>
    TEMPLATE:
    <div className="streamsEntry">
      <Link to={`/channel/${1}`}>
        <img src="https://i.ytimg.com/vi/D6dMyx3bpco/hqdefault_live.jpg" style={{width: '25%', height: '25%'}}></img>
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
