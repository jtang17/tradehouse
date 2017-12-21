import React from 'react';

const ProductControlItem = (props) => {
  if (props.product.title) {
    return (
      <div className="card">
        <div className="card-body">
          <span className="card-title">{props.product.title} (${parseFloat(props.product.unitPrice).toFixed(2)})
          </span>
          <p className="card-text">{props.product.description}</p>
        </div>
      </div>
    );
  }
  return (
    <div>
            No product selected
    </div>
  );
};

export default ProductControlItem;
