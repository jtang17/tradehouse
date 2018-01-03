const Router = require('express-promise-router');
const controllers = require('../../controllers/controllers');
const asyncMiddleware = require('./utils/asyncMiddleware');
const elastic = require('../../models/elasticSearch.js');

const router = new Router();

module.exports = router;

router.post('/', asyncMiddleware(async (req, res, next) => {
  const newProduct = await controllers.saveNewProduct(req.body);

  // Duplicate the products to Elastic Search
  elastic.index({
    index: 'bgm_products',
    type: 'product',
    id: newProduct.dataValues.id,
    body: {
      id: newProduct.dataValues.id || null,
      title: newProduct.dataValues.title || 'Unnamed Product',
      description: newProduct.dataValues.description || 'Missing Description',
      quantity: newProduct.dataValues.quantity || 'Missing Quantity',
      unitPrice: newProduct.dataValues.unitPrice || 'Missing Price',
      merchantId: newProduct.dataValues.merchantId || 1,
      imageUrl: newProduct.dataValues.imageUrl || 'Missing Image',
      createdAt: newProduct.dataValues.createdAt || null,
      updatedAt: newProduct.dataValues.updatedAt || null,
    },
  }, (err, res) => {
    if (err) { console.error(err); } else {
      console.log(`Added new item to Elastic! ${res}`);
    }
  });

  res.json(newProduct);
}));

router.get('/', asyncMiddleware(async (req, res, next) => {
  const rows = await controllers.getAllProducts();
  res.json(rows);
}));

router.delete('/', asyncMiddleware(async (req, res, next) => {
  // TODO: on frontend, make it so that it is not necessary to pass back entire product list
  // presently, only the products for a given merchant are passed back
  // const deletedProduct = await controllers.findOneProduct()
  const rows = await controllers.deleteProduct(req.body)
    .then(() => controllers.findProductsOfMerchant(req.body.merchantId));
  const merchantId = req.body.merchantId;
  const title = req.body.title;

  // Duplicate the products to Elastic Search
  elastic.deleteByQuery({
    index: 'bgm_products',
    type: 'product',
    body: {
      query: {
        term: { title },
      },
    },
  }, (err, res) => {
    if (err) { console.error(err); } else { console.log('Deleted item from ES!', res); }
  });
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
