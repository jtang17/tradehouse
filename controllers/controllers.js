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
  where: {
    productId: entry.productId,
    customerId: entry.customerId,
  },
}).then(review => review.update({
  rating: entry.rating,
  text: entry.text,
}));

const editMerchantReview = entry => db.MerchantReview.findOne({
  where: {
    merchantId: entry.merchantId,
    customerId: entry.customerId,
  }
}).then(review => review.update({
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

const saveNewShoppingCartedProduct = (entry, customerId) => {

  //TODO: using id because currently, products do not have a productId property on fetchProducts
  // if product exists, increase quantity
  return db.ShoppingCartedProduct.findOne({
    where: {
      customerId: customerId,
      productId: entry.id
    }
  }).then((product) => {
    if (product) {
      return product.update({
        quantity: product.quantity+1,
      });
    } else {
      //if product doesn't exist, create it
      return db.ShoppingCartedProduct.create({
        title: entry.title,
        description: entry.description,
        unitPrice: entry.unitPrice,
        quantity: 1,
        customerId: customerId,
        productId: entry.id,
      });
    }
  });

};

const deleteShoppingCartedProduct = (entry, customerId) => db.ShoppingCartedProduct.destroy({
  where: {
    customerId: customerId,
    productId: entry.productId,
  },
});

const editShoppingCartedProduct = (entry, customerId) => {
  return db.ShoppingCartedProduct.findOne({
    where: {
      customerId: customerId,
      productId: entry.productId,
    }
  }).then((product) => {
    if (entry.type === 'increase') {
      return product.update({
        quantity: product.quantity+1,
      });
    }
    if (entry.type === 'decrease') {
      if (product.quantity === 1) {
        product.destroy();
      }
      return product.update({
        quantity: product.quantity-1,
      });
    }
  })
};

const editMerchantProfile = entry => {
  return db.Merchant.findOne({
    where: {
      id: entry.id,
    },
  }).then(merchant => merchant.update({
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
};

const findOneCustomer = ({ customerId }) => db.Customer.findOne({ id: customerId });

const findOneMerchant = (merchantId) => db.Merchant.findOne({
  where: {
    id: merchantId,
  },
});

const findOneProduct = productId => db.Product.findOne({
  where: {
    id: productId,
  },
});

const findProductsOfMerchant = (merchantId) => db.Product.findAll({
  where: {
    merchantId: merchantId,
  },
});

const findReviewsOfMerchant = (merchantId) => db.MerchantReview.findAll({
  where: {
    id: merchantId,
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
