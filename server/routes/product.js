const Router = require('express-promise-router');
const controllers = require('../../controllers/controllers');
const asyncMiddleware = require('./utils/asyncMiddleware');

const router = new Router();

module.exports = router;

router.post('/', asyncMiddleware(async (req, res, next) => {
  const newProduct = await controllers.saveNewProduct(req.body);
  res.json(newProduct);
}));

router.get('/', asyncMiddleware(async (req, res, next) => {
  const rows = await controllers.getAllProducts();
  res.json(rows);
}));

// TODO: decide on location of API endpoints

router.delete('/', asyncMiddleware(async (req, res, next) => {
  // TODO: on frontend, make it so that it is not necessary to pass back entire product list
  // presently, only the products for a given merchant are passed back
  console.log(req.body);
  const rows = await controllers.deleteProduct(req.body)
    .then(() => controllers.findProductsOfMerchant(req.body.merchantId));
  res.json(rows);
}));

router.get('/:productId', asyncMiddleware(async (req, res, next) => {
  const product = await controllers.findOneProduct(req.params.productId);
  res.json(product);
}));

router.post('/:productId/reviews', asyncMiddleware(async (req, res, next) => {
  const newReview = await controllers.saveNewProductReview(req.body);
  res.json(newReview);
}));

router.put('/:productId/reviews', asyncMiddleware(async (req, res, next) => {
  const editedReview = await controllers.editProductReview(req.body);
  res.json(editedReview);
}));

router.get('/:productId/reviews', asyncMiddleware(async (req, res, next) => {
  const reviews = await controllers.findReviewsOfProduct(req.params);
  res.json(reviews);
}));
