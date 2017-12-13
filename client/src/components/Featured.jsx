import React from 'react';
import AddProductForm from './AddProductForm.jsx';
import ProductList from './ProductList.jsx';
// import Header from './Header.jsx';

class Featured extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <a className="customerViewLink" href="/CustomerView">
              <h4>Featured Broadcast: QVC Live Stream</h4>
            </a>
            <iframe width="448" height="252"
                src="https://www.youtube.com/embed/live_stream?channel=UCW4gXUEypFeI3xgoQ27LFBA&autoplay=1"
                frameBorder="0"
                allowFullScreen>
            </iframe>
          </div>
          <div>
          Description: Subscribe to QVC for the inside scoop and helpful how-to videos from the who's who in the shopping and entertainment world!
          </div>
        </div>
      </div>
    )
  }
}

export default Featured;
