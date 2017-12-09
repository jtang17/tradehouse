const merchants = require('./merchant');
const products = require('./product');

module.exports = (app) => {
  app.use('/api/merchants', merchants);
  app.use('/api/products', products);
};
