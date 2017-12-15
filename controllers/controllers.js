const db = require('../models/index.js');

const saveNewProduct = entry => db.Product.create({
  title: entry.title,
  description: entry.description,
  quantity: entry.productQuantity,
  unitPrice: entry.unitPrice,
  merchantId: entry.merchantId,
});

const deleteProduct = entry => db.Product.destroy({
  where: {
    merchantId: entry.merchantId,
    title: entry.title,
  },
});

const saveNewMerchant = entry => db.Merchant.create({
  logo: entry.logo,
  username: entry.username,
  website: entry.website,
  rating: entry.rating,
  location: entry.location,
  email: entry.email,
  facebook: entry.facebook,
  twitter: entry.twitter,
  description: entry.description,
  stream: entry.stream,
  broadcastMessage: entry.broadcastMessage,
  currentProduct: entry.currentProduct,
});

const saveNewCustomer = entry => db.Customer.create({
  username: entry.username,
  password: entry.password,
  email: entry.email,
});

const saveNewProductReview = entry => db.ProductReview.create({
  rating: entry.rating,
  text: entry.text,
  productId: entry.productId,
  customerId: entry.customerId,
});

const editProductReview = entry => db.ProductReview.findOne({
  productId: entry.productId,
  customerId: entry.customerId,
}).then(review => review.set({
  rating: entry.rating,
  text: entry.text,
}));

const editMerchantReview = entry => db.MerchantReview.findOne({
  merchantId: entry.merchantId,
  customerId: entry.customerId,
}).then(review => review.set({
  rating: entry.rating,
  text: entry.text,
}));

const saveNewMerchantReview = entry => db.MerchantReview.create({
  rating: entry.rating,
  text: entry.text,
  productId: entry.productId,
  customerId: entry.customerId,
});

const saveNewSubscription = ({ customerId, merchantId }) => db.Subscription.create({
  customerId,
  merchantId,
});

const saveNewShoppingCartedProduct = entry => db.ShoppingCartedProduct.create({
  quantity: entry.quantity,
  customerId: entry.customerId,
  productId: entry.productId,
});

const deleteShoppingCartedProduct = entry => db.ShoppingCartedProduct.destroy({
  customerId: entry.customerId,
  productId: entry.productId,
});

const editShoppingCartedProduct = entry => db.ShoppingCartedProduct.findOne({
  customerId: entry.customerId,
  productId: entry.productId,
}).then(product => product.set({
  quantity: entry.quantity,
}));

const findOneCustomer = ({ id }) => db.Customer.findOne({ id });

const findOneMerchant = ({ id }) => db.Merchant.findOne({ id });

const findProductsOfMerchant = ({ merchantId }) => db.Product.findAll({
  where: {
    merchantId,
  },
});

const findReviewsOfMerchant = ({ merchantId }) => db.MerchantReview.findAll({
  where: {
    merchantId,
  },
});

const findReviewsOfProduct = ({ productId }) => db.ProductReview.findAll({
  where: {
    productId,
  },
});

const getAllMerchants = () => db.Merchant.findAll({});

const getAllProducts = () => db.Product.findAll({});

const getAllCustomers = () => db.Customer.findAll({});

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
  saveNewShoppingCartedProduct,
  editShoppingCartedProduct,
  deleteShoppingCartedProduct,
};
