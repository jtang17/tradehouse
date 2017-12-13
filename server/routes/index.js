const merchants = require('./merchant');
const customers = require('./customer');
const products = require('./product');

// TODO: authenticate routes

module.exports = (app) => {
  app.use('/api/merchants', merchants);
  app.use('/api/customers', customers);
  app.use('/api/products', products);
};
