import React from 'react';

import { Link } from 'react-router-dom';

class BrowseStores extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="browseStreams__container">
        <ul>
          {this.props.merchants.map((merchant, index) => merchant.storeName && (
            <Link key={index} to={`/store/${merchant.id || 1}`}>
              <div className="streamsEntry__card">
                <div className="streamsTitle__card">
                  <h5>{merchant.storeName}</h5>
                  <p>Rating: {merchant.rating}</p>
                  <p>Website: {merchant.website}</p>
                </div>
                <img className="mercLogo__browser" src={merchant.logo || 'http://clipartandscrap.com/wp-content/uploads/2017/07/Teddy-bear-clip-art-on-teddy-bears-and-clipartwiz-4.png'} style={{ width: '75px' }} />
              </div>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default BrowseStores;

// {props.stores.map((store, index) => {
//   return (
//     <div key={index}>
//       <Link to={`/store/${store.id}`}>{store.username}</Link>
//     </div>
//   );
// })}
