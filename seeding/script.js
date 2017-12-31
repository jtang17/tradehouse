const db = require('../models/index.js');
const controllers = require('../controllers/controllers');
const products = require('./products.json');
const streams = require('./streams.json');
const merchants = require('./merchants.json');
const customers = require('./customers.json');

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

  for (let i = 0; i < products.length; i += 1) {
    let index = Math.floor(Math.random() * (Math.floor(savedMerchants.length)));
    productPromises.push(controllers.saveNewProduct(Object.assign(products[i], {
      // merchantId: savedMerchants[index].id,
      merchantId: 1,
    })));
  }

  for (let i = 0; i < streams.length; i += 1) {
    let index = Math.floor(Math.random() * (Math.floor(savedMerchants.length)));
    streamPromises.push(controllers.editStream(streams[i], 1));
  }

  const savedStreams = await Promise.all(streamPromises);

  return Promise.all(productPromises).then(() => console.log('done seeding, hit Ctrl-C to exit'));
}

db.sequelize
  .sync({ force: true })
  .then(() => seed());
