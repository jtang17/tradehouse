const jwt = require('jsonwebtoken');
const db = require('../models/index.js');
const elastic = require('../models/elasticSearch.js');

const saveNewProduct = entry => db.Product.create({
  title: entry.title,
  description: entry.description,
  quantity: entry.quantity,
  unitPrice: entry.unitPrice,
  merchantId: entry.merchantId,
  imageUrl: entry.imageUrl,
});

const deleteProduct = entry =>
  db.Product.destroy({
    where: {
      merchantId: entry.merchantId,
      title: entry.title,
    },
  });

const saveNewMerchant = entry =>
  db.Merchant.findOrCreate({
    where: {
      logo: entry.logo,
      username: entry.username,
      website: entry.website,
      rating: entry.rating,
      location: entry.location,
      email: entry.email,
      facebook: entry.facebook,
      twitter: entry.twitter,
      description: entry.description,
      currentProduct: entry.currentProduct,
      storeName: entry.storeName,
      sub: jwt.decode(entry.currentIdToken).sub,
    },
  });



const saveNewStream = entry =>
  db.Stream.create({
    merchantId: entry.id,
  });

const saveNewCustomer = entry =>
  db.Customer.findOrCreate({
    where: {
      username: entry.username,
      // password: entry.password,
      email: entry.email,
      sub: jwt.decode(entry.currentIdToken).sub,
    },
  });

const saveNewProductReview = entry =>
  db.ProductReview.create({
    rating: entry.rating,
    text: entry.text,
    productId: entry.productId,
    customerId: entry.customerId,
  });

const editProductReview = entry =>
  db.ProductReview.findOne({
    where: {
      productId: entry.productId,
      customerId: entry.customerId,
    },
  }).then(review =>
    review.update({
      rating: entry.rating,
      text: entry.text,
    }));

const saveNewMerchantReview = entry =>
  db.MerchantReview.create({
    rating: entry.rating,
    text: entry.text,
    productId: entry.productId,
    customerId: entry.customerId,
  });

const editMerchantReview = entry =>
  db.MerchantReview.findOne({
    where: {
      merchantId: entry.merchantId,
      customerId: entry.customerId,
    },
  }).then(review =>
    review.update({
      rating: entry.rating,
      text: entry.text,
    }));

const saveNewWishlistedProduct = (customerId, productId) =>
  db.WishlistedProduct.create({
    customerId,
    productId,
  });

const findCustomerWishlistedProducts = customerId =>
  db.WishlistedProduct.findAll({
    where: { customerId },
  });

const deleteWishlistedProduct = (customerId, productId) =>
  db.WishlistedProduct.destroy({
    where: {
      customerId,
      productId,
    },
  });

const saveNewSubscription = (customerId, merchantId) =>
  db.Subscription.create({
    customerId,
    merchantId,
  });

const findCustomerSubscriptions = customerId =>
  db.Subscription.findAll({
    where: { customerId },
  });

const deleteSubscription = (customerId, merchantId) =>
  db.Subscription.destroy({
    where: {
      customerId,
      merchantId,
    },
  });

const saveNewShoppingCartedProduct = (entry, customerId) =>
  // TODO: using id because currently, products do not have a productId property on fetchProducts
  // if product exists, increase quantity
  db.ShoppingCartedProduct.findOne({
    where: {
      customerId,
      productId: entry.id,
    },
  }).then((product) => {
    if (product) {
      return product.update({
        quantity: product.quantity + 1,
      });
    }
    // if product doesn't exist, create it
    return db.ShoppingCartedProduct.create({
      title: entry.title,
      description: entry.description,
      unitPrice: entry.unitPrice,
      quantity: 1,
      customerId,
      productId: entry.id,
    });
  });

const findShoppingCartedProducts = customerId =>
  db.ShoppingCartedProduct.findAll({
    where: { customerId },
  });

const deleteShoppingCartedProduct = (entry, customerId) =>
  db.ShoppingCartedProduct.destroy({
    where: {
      customerId,
      productId: entry.productId,
    },
  });

const editShoppingCartedProduct = (entry, customerId) =>
  db.ShoppingCartedProduct.findOne({
    where: {
      customerId,
      productId: entry.productId,
    },
  }).then((product) => {
    if (entry.type === 'increase') {
      return product.update({
        quantity: product.quantity + 1,
      });
    }
    if (entry.type === 'decrease') {
      if (product.quantity === 1) {
        product.destroy();
      }
      return product.update({
        quantity: product.quantity - 1,
      });
    }
  });

const editMerchantProfile = (merchantId, entry) =>
  db.Merchant.findOne({
    where: {
      id: merchantId,
    },
  }).then(merchant =>
    merchant.update({
      storeName: entry.storeName,
      logo: entry.logo,
      website: entry.website,
      location: entry.location,
      facebook: entry.facebook,
      twitter: entry.twitter,
      description: entry.description,
    }));

const editMerchantProfileAndFindByEmail = entry =>
  db.Merchant.findOne({
    where: {
      email: entry.email,
    },
  }).then(merchant =>
    merchant.update({
      logo: entry.logo,
      username: entry.username,
      website: entry.website,
      rating: entry.rating,
      location: entry.location,
      email: entry.email,
      facebook: entry.facebook,
      twitter: entry.twitter,
      description: entry.description,
      currentProduct: entry.currentProduct,
    }));

const findOneCustomer = (customerId) => {
  console.log('short syntax');
  return db.Customer.findOne({
    where: {
      id: customerId,
    },
  });
};

// Anton Trying to understand the code
// console.log(findOneCustomer(1).then((user) => {
//   console.log("user data object", user);
// }));

const findOneMerchant = merchantId =>
  db.Merchant.findOne({
    where: {
      id: merchantId,
    },
  });

const findOneMerchantBySub = merchantIdToken =>
  db.Merchant.findOne({
    where: {
      sub: jwt.decode(merchantIdToken).sub,
    },
  });

const findOneCustomerBySub = customerIdToken =>
  db.Customer.findOne({
    where: {
      sub: jwt.decode(customerIdToken).sub,
    },
  });

const findOneProduct = productId =>
  db.Product.findOne({
    where: {
      id: productId,
    },
  });

const findProductsOfMerchant = merchantId =>
  db.Product.findAll({
    where: {
      merchantId,
    },
  });

const findReviewsOfMerchant = merchantId =>
  db.MerchantReview.findAll({
    where: {
      id: merchantId,
    },
  });

const findReviewsOfProduct = productId =>
  db.ProductReview.findAll({
    where: {
      productId,
    },
  });

const getAllMerchants = () => db.Merchant.findAll({});

const getAllProducts = () => db.Product.findAll({});

const getAllCustomers = () => db.Customer.findAll({});

const getOneStream = merchantId => db.Stream.findOne({ where: { merchantId } });

// Do we need a get all active streams?

// We need a function to toggle stream live attribute

const editStream = (entry, merchantId) =>
  db.Stream.findOne({
    where: {
      merchantId,
    },
  }).then(stream =>
    stream.update({
      url: entry.url,
      broadcastMessage: entry.broadcastMessage,
      currentProduct: entry.currentProduct,
      live: entry.live,
    }));

const editMerchantFeaturedProduct = (entry, merchantId) =>
  db.Merchant.findOne({
    where: {
      id: merchantId,
    },
  }).then((merchant) => {
    merchant.update({
      currentProduct: entry.product.id,
    });
    // update the stream table
    db.Stream.findOne({
      where: {
        merchantId,
      },
    }).then((merchantStream) => {
      merchantStream.update({
        currentProduct: entry.product.id,
      });
    });
  }).catch((err) => {
    console.log(err);
  });

const changeToMerchant = customerId =>
  db.Customer.findOne({ id: customerId }).then(customer =>
    saveNewMerchant({ email: customer.email }));

module.exports = {
  saveNewProduct,
  deleteProduct,
  saveNewMerchant,
  saveNewCustomer,
  saveNewWishlistedProduct,
  findCustomerWishlistedProducts,
  deleteWishlistedProduct,
  saveNewSubscription,
  findCustomerSubscriptions,
  deleteSubscription,
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
  editMerchantProfile,
  editProductReview,
  findReviewsOfMerchant,
  findReviewsOfProduct,
  findShoppingCartedProducts,
  saveNewShoppingCartedProduct,
  editShoppingCartedProduct,
  deleteShoppingCartedProduct,
  editStream,
  editMerchantFeaturedProduct,
  changeToMerchant,
  editMerchantProfileAndFindByEmail,
  findOneMerchantBySub,
  findOneCustomerBySub,
  saveNewStream,
  getOneStream,
};
