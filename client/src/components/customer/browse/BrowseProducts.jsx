import React from 'react';

import { Link } from 'react-router-dom';

const BrowseProducts = (props) => {
  return (
    <div>
    {props.products.map((product, index) => {
      return (
        <div key={index}>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </div>
      );
    })}
    </div>
  )
}

export default BrowseProducts;