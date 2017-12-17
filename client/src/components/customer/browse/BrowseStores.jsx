import React from 'react';

import { Link } from 'react-router-dom';

const BrowseStores = (props) => {
  return (
    <div>
      <h4>Store Browser</h4>
    </div>
  )
}

export default BrowseStores;

    // {props.stores.map((store, index) => {
    //   return (
    //     <div key={index}>
    //       <Link to={`/store/${store.id}`}>{store.username}</Link>
    //     </div>
    //   );
    // })}
