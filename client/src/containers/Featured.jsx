import React from 'react';

import { connect } from 'react-redux';
import { fetchAllProducts } from '../actions/productActions.jsx';

import { Link } from 'react-router-dom';

class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    return (
      <div className="featuredBroadcast__container">
        <h1 className="container-header">Best Global Market</h1>
        <div className="featuredVid__container">
          <p>
            <h5>Merchants</h5>
            Best Global market is an interactive platform that allows merchants to broadcast and sell products to their customers.  If you're interested in selling you products, register as a merchant!
            <br />
          </p>
          <p>
            <h5>Customers</h5>
            Customers can watch live streams of products and merchants they are interested in and make instant purchases.  If you're interested in shopping on Best Global Market or following your favorite channels, register as a customer!
          </p>
          <h4>Featured Products</h4>
          <div className="browseProducts__container">
            <div className="productBrowserEntry">
              {this.props.products.slice(0, 2).map((product, index) => (
                <div key={index} className="productsEntry__card">
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
                    </div>
                  </div>
                </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
        <div className="featuredChat__container">
          <iframe
            className="featured__chat"
            frameBorder="0"
            scrolling="no"
            id="chat_embed"
            src="https://www.twitch.tv/embed/datjoncat/chat"
            height="100%"
            width="300"
          />
        </div>
*/

const mapStateToProps = state => ({
  products: state.allProducts,
});

export default connect(mapStateToProps, { fetchAllProducts })(Featured);
