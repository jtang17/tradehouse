const Router = require('express-promise-router');
const jwtAuthz = require('express-jwt-authz');
const controllers = require('../../controllers/controllers');
const asyncMiddleware = require('./utils/asyncMiddleware');
const jwtCheck = require('./utils/authMiddleware');

const router = new Router();

router.get('/:customerId', asyncMiddleware(async (req, res, next) => {
  const customer = await controllers.findOneCustomer(req.params.customerId);
  res.json(customer);
}));

router.get('/', asyncMiddleware(async (req, res, next) => {
  const rows = await controllers.getAllCustomers();
  res.json(rows);
}));

router.get('/bySub/:customerIdToken', asyncMiddleware(async (req, res, next) => {
  const customer = await controllers.findOneCustomerBySub(req.params.customerIdToken);
  res.json(customer);
}));

// router.post('/', jwtCheck, jwtAuthz(['add:customers']), asyncMiddleware(async (req, res, next) => {
// router.post('/', jwtCheck, asyncMiddleware(async (req, res, next) => {
router.post('/', asyncMiddleware(async (req, res, next) => {
  const newCustomer = await controllers.saveNewCustomer(req.body);
  res.json(newCustomer);
}));

router.get('/:customerId/wishlist', asyncMiddleware(async (req, res, next) => {
  const wishlist = await controllers.findCustomerWishlistedProducts(req.params.customerId);
  const products = [];
  for (const item of wishlist) {
    products.push(controllers.findOneProduct(item.productId));
  }
  const wishlistedProducts = await Promise.all(products);
  res.json(wishlistedProducts);
}));

router.post('/:customerId/wishlist', asyncMiddleware(async (req, res, next) => {
  const wishlist = await controllers.saveNewWishlistedProduct(req.params.customerId, req.body.id)
    .then(() => controllers.findCustomerWishlistedProducts(req.params.customerId));
  res.json(wishlist);
}));

router.delete('/:customerId/wishlist', asyncMiddleware(async (req, res, next) => {
  const wishlist = await controllers.deleteWishlistedProduct(req.params.customerId, req.body.product.id)
    .then(() => controllers.findCustomerWishlistedProducts(req.params.customerId));
  res.json(wishlist);
}));

router.get('/:customerId/subscriptions', asyncMiddleware(async (req, res, next) => {
  const subscriptions = await controllers.findCustomerSubscriptions(req.params.customerId);
  const merchants = [];
  for (const entry of subscriptions) {
    merchants.push(controllers.findOneMerchant(entry.merchantId));
  }
  const follows = await Promise.all(merchants);
  res.json(follows);
}));

router.post('/:customerId/subscriptions', asyncMiddleware(async (req, res, next) => {
  const subscriptions = await controllers.saveNewSubscription(req.params.customerId, req.body.merchantId)
    .then(() => controllers.findCustomerSubscriptions(req.params.customerId));
  res.json(subscriptions);
}));

router.delete('/:customerId/subscriptions', asyncMiddleware(async (req, res, next) => {
  const subscriptions = await controllers.deleteSubscription(req.params.customerId, req.body.merchantId)
    .then(() => controllers.findCustomerSubscriptions(req.params.customerId));
  res.json(subscriptions);
}));

router.get('/:customerId/cart', asyncMiddleware(async (req, res, next) => {
  const rows = await controllers.findShoppingCartedProducts(req.params.customerId);
  res.json(rows);
}));

router.post('/:customerId/cart', asyncMiddleware(async (req, res, next) => {
  const products = await controllers.saveNewShoppingCartedProduct(req.body, req.params.customerId)
    .then(() => controllers.findShoppingCartedProducts(req.params.customerId));
  res.json(products);
}));

router.delete('/:customerId/cart', asyncMiddleware(async (req, res, next) => {
  const products = await controllers.deleteShoppingCartedProduct(req.body, req.params.customerId)
    .then(() => controllers.findShoppingCartedProducts(req.params.customerId));
  res.json(products);
}));

router.put('/:customerId/cart', asyncMiddleware(async (req, res, next) => {
  const products = await controllers.editShoppingCartedProduct(req.body, req.params.customerId)
    .then(() => controllers.findShoppingCartedProducts(req.params.customerId));
  res.json(products);
}));

module.exports = router;
