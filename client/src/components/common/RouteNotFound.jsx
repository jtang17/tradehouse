import React from 'react';

import { Link } from 'react-router-dom';

const RouteNotFound = props => (
  <div>
    <h4>404 page</h4>
    <Link to="/">To TradeHouse Streams Home</Link>
  </div>
);

export default RouteNotFound;
