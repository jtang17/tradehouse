const db = require('../models/index.js');

const saveNewProduct = (entry) => {
  return db.Product.create({
    title: entry.title,
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
      title: entry.title,
    },
  });
};

const saveNewMerchant = (entry) => {
  return db.Merchant.create({
    username: entry.username,
    password: entry.password,
  });
};

const saveNewCustomer = (entry) => {
  return db.Customer.create({
    username: entry.username,
    password: entry.password,
    email: entry.email,
  });
};

const saveNewProductReview = (entry) => {
  return db.ProductReview.create({
    rating: entry.rating,
    text: entry.text,
    productId: entry.productId,
    customerId: entry.customerId,
  });
};

const editProductReview = (entry) => {
  return db.ProductReview.findOne({
    productId: entry.productId,
    customerId: entry.customerId,
  }).then((review) => {
    return review.set({
      rating: entry.rating,
      text: entry.text,
    });
  });
};

const editMerchantReview = (entry) => {
  return db.MerchantReview.findOne({
    merchantId: entry.merchantId,
    customerId: entry.customerId,
  }).then((review) => {
    return review.set({
      rating: entry.rating,
      text: entry.text,
    });
  });
};

const saveNewMerchantReview = (entry) => {
  return db.MerchantReview.create({
    rating: entry.rating,
    text: entry.text,
    productId: entry.productId,
    customerId: entry.customerId,
  });
};

const saveNewSubscription = ({ customerId, merchantId }) => {
  return db.Subscription.create({
    customerId,
    merchantId,
  });
};

const findOneCustomer = ({ id }) => {
  return db.Customer.findOne({ id });
};

const findOneMerchant = ({ id }) => {
  return db.Merchant.findOne({ id });
};

const findProductsOfMerchant = ({ merchantId }) => {
  return db.Product.findAll({
    where: {
      merchantId,
    },
  });
};

const findReviewsOfMerchant = ({ merchantId }) => {
  return db.MerchantReview.findAll({
    where: {
      merchantId,
    },
  });
};

const findReviewsOfProduct = ({ productId }) => {
  return db.ProductReview.findAll({
    where: {
      productId,
    },
  });
};

const getAllMerchants = () => {
  return db.Merchant.findAll({});
};

const getAllProducts = () => {
  return db.Product.findAll({});
};

const getAllCustomers = () => {
  return db.Customer.findAll({});
};

module.exports = {
  saveNewProduct,
  deleteProduct,
  saveNewMerchant,
  saveNewCustomer,
  saveNewSubscription,
  findOneCustomer,
  findOneMerchant,
  getAllMerchants,
  getAllProducts,
  getAllCustomers,
  findProductsOfMerchant,
  saveNewProductReview,
  saveNewMerchantReview,
  editMerchantReview,
  editProductReview,
  findReviewsOfMerchant,
  findReviewsOfProduct,
};
