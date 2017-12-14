import React from 'react';
import StoreItem from '../components/StoreItem.jsx';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/actions.jsx';

class StoreView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
    // should fetchProducts of one merchant
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="storeHeader">
          <h4>Store Page: Hardcoded Merchant Name</h4>
          An avid cheese seller
        </div>
        <div className="storeProductList">
          <h4>Products:</h4>
          {this.props.items.map((product, index) => <StoreItem key={index} product={product} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
});

export default connect(mapStateToProps, { fetchProducts })(StoreView);
