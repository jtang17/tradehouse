import React from 'react';

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
              <div className="card" key={index} value={index} onClick={this.selectFeaturedProduct.bind(null, index)}>
                <div className="card-body">
                  <h4 className="card-title">{product.title} (${parseFloat(product.unitPrice).toFixed(2)})
                  </h4>
                  <p className="card-text">{product.description}</p>
                </div>
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