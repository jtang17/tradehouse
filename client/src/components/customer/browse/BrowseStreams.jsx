import React from 'react';

import { Link } from 'react-router-dom';

const BrowseStreams = props => (
  <div>
    <div className="streamBrowserEntry">
      <h4>Stream Browser</h4>
      <br />
      <Link to={`/channel/${1}`}>Lofi hip hop radio </Link>
      <br />
      <Link to={`/store/${1}`}>store</Link>
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
