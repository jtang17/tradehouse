const db = require('../models/index.js');
const controllers = require('../controllers/controllers');
const products = require('./mock_products--cars.json');
const streams = require('./mock_streams.json');
const merchants = require('./mock_merchants.json');
const customers = require('./customers.json');
const elastic = require('../models/elasticSearch.js');

async function seed() {
  const merchantPromises = [];
  const customerPromises = [];
  const productPromises = [];
  const streamPromises = [];
  for (let i = 0; i < merchants.length; i += 1) {
    merchantPromises.push(controllers.saveNewMerchant(merchants[i])
      .then(merchant => controllers.saveNewStream(merchant[0].dataValues))
      .then(() => controllers.saveNewCustomer(merchants[i]))
      .then(() => controllers.editMerchantProfileAndFindByEmail(merchants[i])));
  }
  for (let i = 0; i < customers.length; i += 1) {
    customerPromises.push(controllers.saveNewCustomer(customers[i]));
  }
  const savedMerchants = await Promise.all(merchantPromises);
  const savedCustomers = await Promise.all(customerPromises);

  for (var merchant of savedMerchants) {
    elastic.index({
      index: 'bgm_merchants',
      type: 'merchant',
      id: merchant.dataValues.id || 'Missing ID',
      body: {
        logo: merchant.dataValues.logo || 'Missing Logo',
        username: merchant.dataValues.username || 'Missing Username',
        website: merchant.dataValues.website || 'Missing Website',
        rating: merchant.dataValues.rating || 0,
        location: merchant.dataValues.location || 'Missing Location',
        email: merchant.dataValues.email || 'Missing Email',
        facebook: merchant.dataValues.facebook || 'Missing Facebook',
        twitter: merchant.dataValues.twitter || 'Missing Twitter',
        description: merchant.dataValues.description || 'Missing Description',
        currentProduct: merchant.dataValues.currentProduct || 0,
        storeName: merchant.dataValues.storeName || 'Missing StoreName',
        sub: merchant.dataValues.sub || 1,
        facebook: merchant.dataValues.facebook || 'Missing Facebook',
        createdAt: merchant.dataValues.createdAt || null,
        updatedAt: merchant.dataValues.updatedAt || null,
      },
    }, (err, res) => {
      if (err) { console.error(err); } else {
        console.log(`Added brand new registered Merchant to Elastic! ${res}`);
      }
    });
  }

  for (let i = 0; i < products.length; i += 1) {
    const index = Math.floor(Math.random() * (Math.floor(savedMerchants.length)));
    productPromises.push(controllers.saveNewProduct(Object.assign(products[i], {
      // merchantId: savedMerchants[index].id,
      merchantId: 1,
    })));
  }

  const savedProducts = await Promise.all(productPromises);

  for (var product of savedProducts) {
    elastic.index({
      index: 'bgm_products',
      type: 'product',
      id: product.dataValues.id,
      body: {
        id: product.dataValues.id || null,
        title: product.dataValues.title || 'Unnamed Product',
        description: product.dataValues.description || 'Missing Description',
        quantity: product.dataValues.quantity || 'Missing Quantity',
        unitPrice: product.dataValues.unitPrice || 'Missing Price',
        merchantId: product.dataValues.merchantId || 1,
        imageUrl: product.dataValues.imageUrl || 'Missing Image',
        createdAt: product.dataValues.createdAt || null,
        updatedAt: product.dataValues.updatedAt || null,
      },
    }, (err, res) => {
      if (err) { console.error(err); } else {
        console.log(`Added new item to Elastic! ${res}`);
      }
    });
  }

  for (let i = 0; i < streams.length; i += 1) {
    const index = Math.floor(Math.random() * (Math.floor(savedMerchants.length)));
    streamPromises.push(controllers.editStream(streams[i], index + 1));
  }

  const savedStreams = await Promise.all(streamPromises);

  return Promise.all(productPromises).then(() => console.log('done seeding, hit Ctrl-C to exit'));
}

db.sequelize
  .sync({ force: true })
  .then(() => seed());
