import React from 'react';

import { Link } from 'react-router-dom';

const BrowseProducts = props => (
  <div>
    <h4>Product Browser</h4>
    <div className="productBrowserEntry">
      {props.products.map((product, index) => (
        <div key={index}>
          <img src={product.imageUrl} style={{height: '55px', width: '55px'}}/>
          <Link to={`/product/${product.id}`}>
            {product.title} - ${parseFloat(product.unitPrice).toFixed(2)}
          </Link>
        </div>
        ))}
    </div>
  </div>
);

export default BrowseProducts;
