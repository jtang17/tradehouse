import React from 'react';
import AddProductForm from './AddProductForm.jsx';
import ProductList from './ProductList.jsx';
// import Header from './Header.jsx';

import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <iframe width="560" height="315"
            src="https://www.youtube.com/embed/live_stream?channel=UCSJ4gkVC6NrvII8umztf0Ow&autoplay=1"
            frameBorder="0"
            allowFullScreen>
        </iframe>
        <a href ="/MerchantHome">Merchant Home</a>
      </div>
    )
  }
}

export default App;
