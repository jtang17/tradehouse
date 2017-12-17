import React from 'react';
import { Link } from 'react-router-dom';

import BrowseStreams from './browse/BrowseStreams.jsx';
import BrowseVideos from './browse/BrowseVideos.jsx';
import BrowseProducts from './browse/BrowseProducts.jsx';

class BrowserBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'streams',
    };
    this.toggleStreams = this.toggleStreams.bind(this);
    this.toggleVideos = this.toggleVideos.bind(this);
    this.toggleProducts = this.toggleProducts.bind(this);
  }

  componentDidMount() {
    // TODO:
    // fetchTopStreams
    // fetchTopVideos
    // fetchTopProducts
  }

  toggleStreams() {
    this.setState({
      type: 'streams',
    });
  }

  toggleVideos() {
    this.setState({
      type: 'videos',
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
    return (
      <div>
        <div>
          <button onClick={this.toggleStreams}>Streams</button>
          <button onClick={this.toggleVideos}>Videos</button>
          <button onClick={this.toggleProducts}>Products</button>
        </div>
        {this.state.type === 'streams' && <BrowseStreams />}
        {this.state.type === 'videos' && <BrowseVideos />}
        {this.state.type === 'products' && <BrowseProducts products={this.props.products} />}
      </div>
    );
  }
}
// {this.state.type === 'streams' && <BrowseStreams />}
// {this.state.type === 'videos' && <BrowseVideos />}

export default BrowserBody;
