const db = require('../models/index.js');

const saveNewProduct = entry => db.Product.create({
  title: entry.title,
  description: entry.description,
  quantity: entry.quantity,
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

const findShoppingCartedProducts = customerId => db.ShoppingCartedProduct.findAll({
  where: { customerId: customerId },
});

const saveNewShoppingCartedProduct = (entry, customerId) => db.ShoppingCartedProduct.create({
  title: entry.title,
  description: entry.description,
  unitPrice: entry.unitPrice,
  quantity: entry.quantity,
  customerId: customerId,
  productId: entry.id,
  //TODO: using id because currently, products do not have a productId property on fetchProducts
});

const deleteShoppingCartedProduct = (entry, customerId) => db.ShoppingCartedProduct.destroy({
  where: {
    customerId: customerId,
    productId: entry.productId,
  },
});

const editShoppingCartedProduct = entry => db.ShoppingCartedProduct.findOne({
  customerId: entry.customerId,
  productId: entry.productId,
}).then(product => product.set({
  quantity: entry.quantity,
}));

const editMerchantProfile = entry => db.Merchant.findOne({
  id: entry.id,
}).then(merchant => merchant.set({
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
}));

const findOneCustomer = ({ customerId }) => db.Customer.findOne({ id: customerId });

const findOneMerchant = ({ merchantId }) => db.Merchant.findOne({ id: merchantId });

const findOneProduct = productId => db.Product.findOne({
  where: {
    id: productId,
  },
});

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
  findOneProduct,
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
  findShoppingCartedProducts,
  saveNewShoppingCartedProduct,
  editShoppingCartedProduct,
  deleteShoppingCartedProduct,
  editMerchantProfile,
};
