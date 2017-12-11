import React from 'react';
import AddProductForm from '../components/AddProductForm.jsx';
import ProductList from '../components/ProductList.jsx';

class ProductsView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AddProductForm />
        <ProductList />
      </div>
    )
  }
}

export default ProductsView;