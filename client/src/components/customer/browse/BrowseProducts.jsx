import React from 'react';

import { Link } from 'react-router-dom';

const BrowseProducts = (props) => {
  return (
    <div>
    <h4>Product Browser</h4>
      <div className="productBrowserEntry">
      {props.products.map((product, index) => {
        return (
          <div key={index}>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default BrowseProducts;