import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/actions.jsx';

import ChangeVideoForm from '../components/ChangeVideoForm.jsx';
import ProductControl from '../components/ProductControl.jsx';

class BroadcastView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        <ChangeVideoForm />
        <ProductControl products={this.props.products} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.items
  }
}

export default connect(mapStateToProps, { fetchProducts })(BroadcastView);