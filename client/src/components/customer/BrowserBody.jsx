import React from 'react';

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
    const streams =
      (<div>
        Streams:
        <a href="/channel">Lofi hip hop radio </a><br />
        <a href="/store">store</a>
      </div>);
    const videos = <div>Videos: </div>;
    const products = <div>Products: <a href="/product">sample product</a></div>;
    return (
      <div>
        <div>
          <button onClick={this.toggleStreams}>Streams</button>
          <button onClick={this.toggleVideos}>Videos</button>
          <button onClick={this.toggleProducts}>Products</button>
        </div>
        {this.state.type === 'streams' && streams}
        {this.state.type === 'videos' && videos}
        {this.state.type === 'products' && products}
      </div>
    );
  }
}

export default BrowserBody;
