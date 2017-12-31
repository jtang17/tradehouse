const Router = require('express-promise-router');
const controllers = require('../../controllers/controllers');
const asyncMiddleware = require('./utils/asyncMiddleware');

const router = new Router();

module.exports = router;

router.post('/', asyncMiddleware(async (req, res, next) => {
  const newMerchant = await controllers.saveNewMerchant(req.body);
  controllers.saveNewStream(newMerchant);
  res.json(newMerchant);
}));

router.get('/', asyncMiddleware(async (req, res, next) => {
  const rows = await controllers.getAllMerchants();
  res.json(rows);
}));

router.get('/:merchantId', asyncMiddleware(async (req, res, next) => {
  const merchant = await controllers.findOneMerchant(req.params.merchantId);
  res.json(merchant);
}));

router.get('/bySub/:merchantIdToken', asyncMiddleware(async (req, res, next) => {
  const merchant = await controllers.findOneMerchantBySub(req.params.merchantIdToken);
  res.json(merchant);
}));

router.put('/:merchantId', asyncMiddleware(async (req, res, next) => {
  const merchant = await controllers.editMerchantProfile(req.params.merchantId, req.body.profile);
  res.json(merchant);
}));

router.post('/:merchantId/products', asyncMiddleware(async (req, res, next) => {
  const newProduct = await controllers.saveNewProduct(req.body);
  res.json(newProduct);
}));

router.get('/:merchantId/products', asyncMiddleware(async (req, res, next) => {
  const products = await controllers.findProductsOfMerchant(req.params.merchantId);
  res.json(products);
}));

router.post('/:merchantId/reviews', asyncMiddleware(async (req, res, next) => {
  const newReview = await controllers.saveNewMerchantReview(req.body);
  res.json(newReview);
}));

router.put('/:merchantId/reviews', asyncMiddleware(async (req, res, next) => {
  const editedReview = await controllers.editMerchantReview(req.body);
  res.json(editedReview);
}));

router.get('/:merchantId/reviews', asyncMiddleware(async (req, res, next) => {
  const reviews = await controllers.findReviewsOfMerchant(req.params.merchantId);
  res.json(reviews);
}));

router.get('/:merchantId/streams', asyncMiddleware(async (req, res, next) => {
  const stream = await controllers.getOneStream(req.params.merchantId);
  res.json(stream);
}));

router.post('/:merchantId/streams', asyncMiddleware(async (req, res, next) => {
  const newReview = await controllers.saveNewStream(req.body);
  res.json(newReview);
}));

router.put('/:merchantId/streams', asyncMiddleware(async (req, res, next) => {
  const url = await controllers.editStream(req.body, req.params.merchantId);
  res.json(url);
}));

router.put('/:merchantId/featured', asyncMiddleware(async (req, res, next) => {
  const featuredProduct = await controllers.editMerchantFeaturedProduct(req.body, req.params.merchantId);
  res.json(featuredProduct);
}));
