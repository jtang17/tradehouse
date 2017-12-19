import React from 'react';

import { Link } from 'react-router-dom';

class BrowseStores extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Store Browser</h4>
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
