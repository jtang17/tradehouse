let SQL_PSWD;
if (process.env.HOME === '/home/circleci') {
  SQL_PSWD = require('../config.js').SQL_PSWD;
  process.env.DATABASE_URL = 'tradehouse_streams';
}

if (!global.hasOwnProperty('db')) {
  const Sequelize = require('sequelize');

  let sequelize = null;
  if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, 'circleci', SQL_PSWD, {
      dialect: 'mysql',
      protocol: 'mysql',
      logging: true,
      charset: 'utf8',
    });
  } else {
    sequelize = new Sequelize('tradehouse_streams', 'root', '', {
      host: 'localhost',
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      charset: 'utf8',
    });
  }
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connected to MySQL db');
    })
    .catch(err => console.error('Unable to connect to SQL: ', err));

  global.db = {
    Sequelize,
    sequelize,
    Customer: sequelize.import(`${__dirname}/customer`),
    Product: sequelize.import(`${__dirname}/product`),
    Merchant: sequelize.import(`${__dirname}/merchant`),
    ProductReview: sequelize.import(`${__dirname}/productReview`),
    MerchantReview: sequelize.import(`${__dirname}/merchantReview`),
    DirectMessage: sequelize.import(`${__dirname}/directMessage`),
    Subscription: sequelize.import(`${__dirname}/subscription`),
    WishlistedProduct: sequelize.import(`${__dirname}/wishlistedProduct`),
    PurchasedProduct: sequelize.import(`${__dirname}/purchasedProduct`),
    ShoppingCartedProduct: sequelize.import(`${__dirname}/shoppingCartedProduct`),
    Stream: sequelize.import(`${__dirname}/stream`),
  };

  global.db.Customer.belongsToMany(global.db.Merchant, {
    through: 'direct_message',
    unique: false,
  });
  global.db.Merchant.belongsToMany(global.db.Customer, {
    through: 'direct_message',
    unique: false,
  });

  global.db.Customer.belongsToMany(global.db.Merchant, {
    through: 'subscription',
    unique: 'customer_merchant_subscription',
  });
  global.db.Merchant.belongsToMany(global.db.Customer, {
    through: 'subscription',
    unique: 'customer_merchant_subscription',
  });

  global.db.Customer.belongsToMany(global.db.Product, {
    through: 'wishlisted_product',
    unique: 'customer_product_wishlisted',
  });
  global.db.Product.belongsToMany(global.db.Customer, {
    through: 'wishlisted_product',
    unique: 'customer_product_wishlisted',
  });

  global.db.Customer.belongsToMany(global.db.Product, {
    through: 'purchased_product',
    unique: false,
  });
  global.db.Product.belongsToMany(global.db.Customer, {
    through: 'purchased_product',
    unique: false,
  });

  global.db.Customer.belongsToMany(global.db.Product, {
    through: 'product_review',
    unique: 'customer_product_review',
  });
  global.db.Product.belongsToMany(global.db.Customer, {
    through: 'product_review',
    unique: 'customer_product_review',
  });

  global.db.Customer.belongsToMany(global.db.Product, {
    through: 'merchant_review',
    unique: 'customer_merchant_review',
  });
  global.db.Product.belongsToMany(global.db.Customer, {
    through: 'merchant_review',
    unique: 'customer_merchant_review',
  });

  global.db.Customer.belongsToMany(global.db.Product, {
    through: 'shopping_carted_product',
    unique: 'customer_product_shopping_carted',
  });
  global.db.Product.belongsToMany(global.db.Customer, {
    through: 'shopping_carted_product',
    unique: 'customer_product_shopping_carted',
  });

  global.db.Stream.belongsTo(global.db.Merchant);
  global.db.Product.belongsTo(global.db.Merchant);
}

module.exports = global.db;
