
export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    productName: product,
  };
}

export const deleteProduct = (index) => {
  return {
    type: 'DELETE_PRODUCT',
    index: index
  };
}

export const clearProducts = () => {
  return {
    type: 'CLEAR_PRODUCTS'
  };
}