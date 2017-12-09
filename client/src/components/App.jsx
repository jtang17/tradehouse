import React from 'react';
import AddProductForm from './AddProductForm.jsx';
import ProductList from './ProductList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Product List</h1>
        <AddProductForm />
        <ProductList />
          <iframe width="560" height="315"
              src="https://www.youtube.com/embed/live_stream?channel=UCSJ4gkVC6NrvII8umztf0Ow&autoplay=1"
              frameBorder="0"
              allowFullScreen>
          </iframe>
      </div>
    )
  }
}

export default App;