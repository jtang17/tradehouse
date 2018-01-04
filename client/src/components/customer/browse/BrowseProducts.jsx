import React from 'react';

import { Link } from 'react-router-dom';

const BrowseProducts = props => (
  <div className="browseProducts__container">
    <div className="productBrowserEntry">
      {props.products.map((product, index) => (
        <Link key={index} to={`/product/${product.id}`}>
          <div className="productsEntry__card">
            <div className="productImg__card">
              <img src={product.imageUrl} />
            </div>
            <div className="productTitle__card">
              <h5>{product.title}</h5>
              <p>Product Rating: [insert me]</p>
              <p>Left in Stock: {product.quantity}</p>
            </div>
            <div className="productDescription__card">
              <p>Description: {product.description}</p>
              <div className="productCTA__card">
                <span>Cost: ${parseFloat(product.unitPrice).toFixed(2)}</span>
                <span className="btn--action">Add to Cart</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default BrowseProducts;
