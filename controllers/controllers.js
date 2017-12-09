const db = require('../models/index.js');

const saveNewProduct = (entry) => {
  return db.Product.create({
    title: entry.productName,
    description: entry.description,
    quantity: entry.productQuantity,
    unitPrice: entry.price,
    merchantId: entry.merchantId
  });
};

module.exports.saveNewProduct = saveNewProduct;
