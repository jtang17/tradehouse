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

const saveNewMerchant = (entry) => {
  return db.Merchant.create({
    username: entry.username,
    password: entry.password
  });
};

const getAllMerchants = () => {
  return db.Merchant.findAll({});
};

const getAllProducts = () => {
  return db.Product.findAll({});
};

module.exports.saveNewProduct = saveNewProduct;
module.exports.saveNewMerchant = saveNewMerchant;
module.exports.getAllMerchants = getAllMerchants;
module.exports.getAllProducts = getAllProducts;
