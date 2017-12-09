import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductItem from './ProductItem.jsx';
import {
  addProduct,
  clearProducts
} from '../actions/actions.jsx';


class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    };
    console.log('props:', this.props);
    this.clearProductList = this.clearProductList.bind(this);
  }

  componentWillMount() {
    console.log('props:', this.props);
    // const { store } = this.context;
    // store.subscribe(() => {
    //   var state = store.getState();
    //   this.setState({
    //     items: this.props.items
    //   });
    // });
  }

  clearProductList() {
    console.log(this.props);
    this.props.clearProducts();
  }

  render() {

    var items =
      this.props.items.map((product, index) => {
        return <ProductItem key={index} index={index} product={product} />
      });
    console.log('items', this.props.items);
    // this.props.items.forEach((product, index) => {
    //   items.push(<ProductItem
    //                key={index}
    //                index={index}
    //                product={product}
    //   />);
    // });


    if (!items.length) {
      return (
        <p>
          <i>No products</i>
        </p>
      );
    }

    return (
      <span>
        <ol>{ items }</ol>
        <button onClick={this.clearProductList}>Clear Product List</button>
      </span>
    );
  }
}
ProductList.contextTypes = {
  store: PropTypes.object
};


const mapStateToProps = state => {
  console.log('state:', state);
  return {
    items: state.products.items
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addProduct: (payload) => dispatch({
//       type: 'ADD_PRODUCT',
//       payload: payload,
//     }),
//     clearProducts: () => dispatch({
//       type: 'CLEAR_PRODUCTS'
//     })
//   }
// }



// need mapStateToProps
export default connect(mapStateToProps, { addProduct, clearProducts })(ProductList);
