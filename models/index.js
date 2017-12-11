if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize');

  var sequelize = null;
  if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect: 'mysql',
      protocol: 'mysql',
      logging: true,
      charset: 'utf8'
    });
  } else {
    sequelize = new Sequelize('tradehouse_streams', 'root', '', {
      host: 'localhost',
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      charset: 'utf8'
    });
  }
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connected to MySQL db');
    })
    .catch((err) => {
      return console.error('Unable to connect to SQL: ', err);
    });

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Consumer: sequelize.import(__dirname + '/consumer'),
    Product: sequelize.import(__dirname + '/product'),
    Merchant: sequelize.import(__dirname + '/merchant'),
    DirectMessage: sequelize.define('direct_message', {
      body: Sequelize.TEXT
    }),
    Subscription: sequelize.define('subscription', {
    }),
    WishlistedProduct: sequelize.define('wishlisted_product', {
    }),
    PurchasedProduct: sequelize.define('purchased_product', {
      quantity: Sequelize.INTEGER
    })
  };

  global.db.Consumer.belongsToMany(global.db.Merchant, {
    through: 'direct_message',
    unique: false
  });
  global.db.Merchant.belongsToMany(global.db.Consumer, {
    through: 'direct_message',
    unique: false
  });

  global.db.Consumer.belongsToMany(global.db.Merchant, {
    through: 'subscription',
    unique: 'consumer_merchant_subscription'
  });
  global.db.Merchant.belongsToMany(global.db.Consumer, {
    through: 'subscription',
    unique: 'consumer_merchant_subscription'
  });

  global.db.Consumer.belongsToMany(global.db.Product, {
    through: 'wishlisted_product',
    unique: 'consumer_product_wishlisted'
  });
  global.db.Product.belongsToMany(global.db.Consumer, {
    through: 'wishlisted_product',
    unique: 'consumer_product_wishlisted'
  });

  global.db.Consumer.belongsToMany(global.db.Product, {
    through: 'purchased_product',
    unique: false
  });
  global.db.Product.belongsToMany(global.db.Consumer, {
    through: 'purchased_product',
    unique: false
  });

  global.db.Product.belongsTo(global.db.Merchant);
}

module.exports = global.db;
