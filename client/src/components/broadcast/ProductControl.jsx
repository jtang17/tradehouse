import React from 'react';
import ProductControlItem from './ProductControlItem.jsx';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.selectFeaturedProduct = this.selectFeaturedProduct.bind(this);
  }

  selectFeaturedProduct(index) {
    this.props.selectFeaturedProduct(this.props.products[index]);
  }

  render() {
    return (
      <div className="featuredProduct__container">
        <h4 className="sub-heading">Currently Featured Product:</h4>
        <ProductControlItem product={this.props.featuredProduct} />
        <h5 className="sub-heading">Product List</h5>
        {this.props.products.map((product, index) => (
          <div key={index} onClick={this.selectFeaturedProduct.bind(null, index)}>
            <ProductControlItem product={product} />
          </div>
            ))}
      </div>
    );
  }
}

export default ProductControl;
