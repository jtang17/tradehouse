import React from 'react';
import { Link } from 'react-router-dom';

import BrowseStreams from './browse/BrowseStreams.jsx';
import BrowseStores from './browse/BrowseStores.jsx';
import BrowseProducts from './browse/BrowseProducts.jsx';

class BrowserBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'streams',
    };
    this.toggleStreams = this.toggleStreams.bind(this);
    this.toggleStores = this.toggleStores.bind(this);
    // this.toggleVideos = this.toggleVideos.bind(this);
    this.toggleProducts = this.toggleProducts.bind(this);
  }

  componentDidMount() {
    // TODO:
    // fetchTopStreams
    // fetchTopVideos
    // fetchTopStores
    // fetchTopProducts
  }

  toggleStreams() {
    this.setState({
      type: 'streams',
    });
  }

  // toggleVideos() {
  //   this.setState({
  //     type: 'videos',
  //   });
  // }

  toggleStores() {
    this.setState({
      type: 'stores',
    });
  }

  toggleProducts() {
    this.setState({
      type: 'products',
    });
  }

  // TODO: refactor streams, videos, products to components
  // also, each stream/video/product within a card/container
  render() {
    let streams = [];
    let products = [];
    let merchants = [];
   console.log(this.props.searchMixed);
    if (Array.isArray(this.props.searchMixed)) {
      products = this.props.searchMixed.filter((item, index) => item._type === 'product').map(element => element._source);
      console.log('products', products);

    }
    if (Array.isArray(this.props.searchMixed)) {
      streams = this.props.searchMixed.filter((item, index) => item._type === 'stream').map(element => element._source);
      console.log('streams', streams);
 
    }
    if (Array.isArray(this.props.searchMixed)) {
      merchants = this.props.searchMixed.filter((item, index) => item._type === 'merchant').map(element => element._source);
      console.log('merchants', merchants);

    }

    if (this.props.searchMixed.length === 0 || typeof this.props.searchMixed === 'string') {
      products = this.props.products;
      streams = this.props.streams;
      merchants = this.props.merchants;
    }


    return (
      <div>
        <div className="browseNavigation__container">
          <h3 className="container-header">Browse Contents</h3>
          <div className="filter__container">
            <a className="btn--filter hvr-icon-down" onClick={this.toggleStreams}>Streams</a>
            <a className="btn--filter hvr-icon-down" onClick={this.toggleStores}>Stores</a>
            <a className="btn--filter hvr-icon-down" onClick={this.toggleProducts}>Products</a>
          </div>
        </div>

        {this.state.type === 'streams' && <BrowseStreams streams={streams} />}
        {this.state.type === 'stores' && <BrowseStores merchants={merchants} />}
        {this.state.type === 'products' && <BrowseProducts products={products} addToCart={this.props.addToCart} customerInfo={this.props.customerInfo} />}
      </div>
    );
  }
}
// <a className="btn--filter hvr-icon-down" onClick={this.toggleStores}>Stores</a>

export default BrowserBody;
