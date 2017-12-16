const Router = require('express-promise-router');
const controllers = require('../../controllers/controllers');
const asyncMiddleware = require('./utils/asyncMiddleware');

const router = new Router();

router.get('/:customerId', asyncMiddleware(async (req, res, next) => {
  const customer = await controllers.findOneCustomer(req.params.customerId);
  res.json(customer);
}));

router.get('/', asyncMiddleware(async (req, res, next) => {
  const rows = await controllers.getAllCustomers();
  res.json(rows);
}));

router.post('/', asyncMiddleware(async (req, res, next) => {
  const newCustomer = await controllers.saveNewCustomer(req.body);
  res.json(newCustomer);
}));

router.post('/:customerId/subscriptions', asyncMiddleware(async (req, res, next) => {
  const subscription = await controllers.saveNewSubscription(req.body);
  res.json(subscription);
}));

router.get('/:customerId/cart', asyncMiddleware(async (req, res, next) => {
  const rows = await controllers.findShoppingCartedProducts(req.params.customerId);
  res.json(rows);
}));

router.post('/:customerId/cart', asyncMiddleware(async (req, res, next) => {
  const products = await controllers.saveNewShoppingCartedProduct(req.body, req.params.customerId).then(() => controllers.findShoppingCartedProducts(req.params.customerId));
  res.json(products);
}));

router.delete('/:customerId/cart', asyncMiddleware(async (req, res, next) => {
  const products = await controllers.deleteShoppingCartedProduct(req.body, req.params.customerId)
    .then(() => controllers.findShoppingCartedProducts(req.params.customerId));
  res.json(products);
}));

module.exports = router;
