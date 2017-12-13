const db = require('../models/index.js');

const saveNewProduct = (entry) => {
  return db.Product.create({
    title: entry.productName,
    description: entry.description,
    quantity: entry.productQuantity,
    unitPrice: entry.price,
    merchantId: entry.merchantId,
  });
};

const deleteProduct = (entry) => {
  return db.Product.destroy({
    where: {
      merchantId: entry.merchantId,
      title: entry.productName,
    },
  });
};

const saveNewMerchant = (entry) => {
  return db.Merchant.create({
    username: entry.username,
    password: entry.password,
  });
};

const saveNewConsumer = (entry) => {
  return db.Consumer.create({
    username: entry.username,
    password: entry.password,
  });
};

const saveNewProductReview = (entry) => {
  return db.ProductReview.create({
    rating: entry.rating,
    text: entry.text,
    productId: entry.productId,
    consumerId: entry.consumerId,
  });
};

const saveNewMerchantReview = (entry) => {
  return db.MerchantReview.create({
    rating: entry.rating,
    text: entry.text,
    productId: entry.productId,
    consumerId: entry.consumerId,
  });
};

const saveNewSubscription = (entry) => {
  return db.Subscription.create({ ...entry });
};

const findOneConsumer = (entry) => {
  return db.Consumer.findOne({ username: entry.consumer || entry.username });
};

const findOneMerchant = (entry) => {
  return db.Merchant.findOne({ username: entry.merchant || entry.username });
};

const findProductsOfMerchant = (merchantId) => {
  return db.Product.findAll({
    where: {
      merchantId,
    },
  });
};

const getAllMerchants = () => {
  return db.Merchant.findAll({});
};

const getAllProducts = () => {
  return db.Product.findAll({});
};

const getAllConsumers = () => {
  return db.Consumer.findAll({});
};

module.exports = {
  saveNewProduct,
  deleteProduct,
  saveNewMerchant,
  saveNewConsumer,
  saveNewSubscription,
  findOneConsumer,
  findOneMerchant,
  getAllMerchants,
  getAllProducts,
  getAllConsumers,
  findProductsOfMerchant,
  saveNewProductReview,
  saveNewMerchantReview,
};
