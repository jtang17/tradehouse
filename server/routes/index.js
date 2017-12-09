const merchants = require('./merchant');
const products = require('./product');
const consumers = require('./consumer');

module.exports = (app) => {
  app.use('/api/merchants', merchants);
  app.use('/api/products', products);
  app.use('/api/consumers', consumers);
};
