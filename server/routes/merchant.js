const Router = require('express-promise-router');
const controllers = require('../../controllers/controllers');
const asyncMiddleware = require('./utils/asyncMiddleware');

const router = new Router();

module.exports = router;

router.post('/', asyncMiddleware(async (req, res, next) => {
  // // example data
  // req.body = {
  //   username: 'bob',
  //   password: 'aaa'
  // };
  const newMerchant = await controllers.saveNewMerchant(req.body);
  // console.log(newMerchant);
  res.json(newMerchant);
}));

router.get('/', asyncMiddleware(async (req, res, next) => {
  const rows = await controllers.getAllMerchants();
  res.json(rows);
}));

router.post('/:merchantId/products', asyncMiddleware(async (req, res, next) => {
  // // example data
  // req.body = {
  //   productName: 'toothpaste',
  //   description: 'minty',
  //   productQuantity: '5',
  //   price: '4.99',
  //   merchantId: '1'
  // };
  const newProduct = await controllers.saveNewProduct(req.body);
  res.json(newProduct);
}));

router.get('/:merchantId/products', asyncMiddleware(async (req, res, next) => {
  const products = await controllers.findProductsOfMerchant(req.params.merchantId);
  res.json(products);
}));
