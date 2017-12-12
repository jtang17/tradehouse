import React from 'react';

const ProductControlItem = props => {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{props.product.title} (${parseFloat(props.product.unitPrice).toFixed(2)})
          </h4>
          <p className="card-text">{props.product.description}</p>
        </div>
      </div>
    )
}

export default ProductControlItem;