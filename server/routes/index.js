const merchants = require('./merchant');
const consumers = require('./consumer');

module.exports = (app) => {
  app.use('/api/merchants', merchants);
  app.use('/api/consumers', consumers);
};
