const Router = require('express-promise-router');
const controllers = require('../../controllers/controllers');
const asyncMiddleware = require('./utils/asyncMiddleware');

const router = new Router();

module.exports = router;

router.post('/', asyncMiddleware(async (req, res, next) => {
  // // example data
  // req.body = {
  //   title: 'toothpaste',
  //   description: 'minty',
  //   productQuantity: '5',
  //   price: '4.99',
  //   merchantId: '1'
  // };
  const newProduct = await controllers.saveNewProduct(req.body);
  res.json(newProduct);
}));

router.get('/', asyncMiddleware(async (req, res, next) => {
  const rows = await controllers.getAllProducts();
  res.json(rows);
}));

// TODO: decide on location of API endpoints

router.delete('/', asyncMiddleware(async (req, res, next) => {
  // // example data
  // req.body = {
  //   title: 'aaa',
  //   merchantId: '1'
  // };
  const rows = await controllers.deleteProduct(req.body)
    .then(() => controllers.findProductsOfMerchant(req.body.merchantId));
  res.json(rows);
}));

router.post('/reviews', asyncMiddleware(async (req, res, next) => {
  const newReview = await controllers.saveNewProductReview(req.body);
  res.json(newReview);
}));

router.put('/reviews', asyncMiddleware(async (req, res, next) => {
  const editedReview = await controllers.editProductReview(req.body);
  res.json(editedReview);
}));

router.get('/:productId/reviews', asyncMiddleware(async (req, res, next) => {
  const reviews = await controllers.findReviewsOfProduct(req.params.productId);
  res.json(reviews);
}));
