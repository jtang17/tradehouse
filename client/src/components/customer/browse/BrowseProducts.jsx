import React from 'react';

import { Link } from 'react-router-dom';

const BrowseProducts = props => (
  <div className="browseProducts__container">
    <div className="productBrowserEntry">
      {props.products.map((product, index) => (
        <div key ={index} className="productsEntry__card">
          <div className="productImg__card">
            <Link to={`/product/${product.id}`}>
              <img src={product.imageUrl} />
            </Link>
          </div>
          <Link to={`/product/${product.id}`}>
            <div className="productTitle__card">
              <h5>{product.title}</h5>
              <p>Product Rating: [insert me]</p>
              <p>Left in Stock: {product.quantity}</p>
            </div>
          </Link>
          <div className="productDescription__card">
            <p>Description: {product.description}</p>
            <div className="productCTA__card">
              <span>Cost: ${parseFloat(product.unitPrice).toFixed(2)}</span>
              {(props.customerInfo && props.customerInfo.id) ? (
                <button className="btn--action" onClick={props.addToCart.bind(null, product,props.customerInfo.id)}>Add to Cart</button>
                ) : (
                <div>Please log in to shop</div>
                )
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BrowseProducts;
