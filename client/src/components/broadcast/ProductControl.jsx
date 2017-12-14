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
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Currently Featured Product:</h4>
            <ProductControlItem product={this.props.featuredProduct} />
          </div>
          <div className="col">
            <h4>Product List</h4>
            {this.props.products.map((product, index) => (
              <div key={index} onClick={this.selectFeaturedProduct.bind(null, index)}>
                <ProductControlItem product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductControl;
