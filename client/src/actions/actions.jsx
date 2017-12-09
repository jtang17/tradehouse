
export const addProduct = (productName) => {
  return {
    type: 'ADD_PRODUCT',
    product: product,
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
