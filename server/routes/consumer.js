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

router.get('/:id', asyncMiddleware(async (req, res, next) => {
  const consumer = await controllers.findOneConsumer(req.params);
  res.json(consumer);
}));

router.post('/subscriptions', asyncMiddleware(async (req, res, next) => {
  const subscription = await controllers.saveNewSubscription(req.body);
  res.json(subscription);
}));

module.exports = router;
