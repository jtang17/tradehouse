import React from 'react';

import { Link } from 'react-router-dom';

class BrowseStreams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="browseStreams__container">
        <ul>
          {this.props.streams.map((stream, index) => stream.id && (
          <Link key={index} to={`/channel/${stream.id || 1}`}>
            <div className="streamsEntry__card">
              <div className="streamsTitle__card">
                <h5>{stream.storeName || 'Store Name'}</h5>
                <p>Streaming: {stream.broadcastMessage}</p>
                <p>Website: {stream.broadcastMessage}</p>
              </div>
              <img className="mercLogo__browser" src={stream.logo || 'http://clipartandscrap.com/wp-content/uploads/2017/07/Teddy-bear-clip-art-on-teddy-bears-and-clipartwiz-4.png'} style={{ width: '75px' }} />
            </div>
          </Link>
        ))}
        </ul>
      </div>);
  }
}

export default BrowseStreams;

//            <div className="streamsDescription__card">
//              <p>Broadcast Message: {merchant.broadcastMessage}</p>
//           </div>

// {props.streams.map((stream, index) => {
//   return (
//     <div key={index}>
//       <Link to={`/channel/${stream.id}`}>{stream.title}</Link>
//     </div>
//   );
// })}

