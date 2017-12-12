import React from 'react';
import ProductControlItem from './ProductControlItem.jsx';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    }
    this.selectFeaturedProduct = this.selectFeaturedProduct.bind(this);
  }

  selectFeaturedProduct(index) {
    this.setState({
      selected: this.props.products[index],
    })
  }

  render() {
    const featured =
      <div>
        {this.state.selected.title}
      </div>

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Currently Featured Product:</h4>
            {this.state.selected ? featured : 'No product selected'}
          </div>
          <div className="col">
          <h4>Product List</h4>
          {this.props.products.map((product, index) => {
            return (
              <div key={index} onClick={this.selectFeaturedProduct.bind(null, index)}>
                <ProductControlItem product={product} />
              </div>
            )
          })}
          </div>
        </div>
      </div>
    )
  }
}

export default ProductControl;