const Router = require('express-promise-router');
const controllers = require('../../controllers/controllers');
const asyncMiddleware = require('./utils/asyncMiddleware');

const router = new Router();


router.get('/', asyncMiddleware(async (req, res, next) => {
  const rows = await controllers.getAllConsumers();
  res.json(rows);
}));

router.post('/', asyncMiddleware(async (req, res, next) => {
  // // example data
  // req.body = {
  //   username: 'ann',
  //   password: 'aaa'
  // };
  const newConsumer = await controllers.saveNewConsumer(req.body);
  res.json(newConsumer);
}));

router.post('/subscription', asyncMiddleware(async (req, res, next) => {
  // // example data
  // req.body = {
  //   consumer: 'ann',
  //   merchant: 'bob'
  // };
  const consumer = await controllers.findOneConsumer(req.body);
  const merchant = await controllers.findOneMerchant(req.body);
  const subscription = await controllers.saveNewSubscription({
    consumerId: consumer.dataValues.id,
    merchantId: merchant.dataValues.id,
  });
  res.json(subscription);
}));

module.exports = router;
