const Router = require('express-promise-router');
const controllers = require('../../controllers/controllers');
const asyncMiddleware = require('./utils/asyncMiddleware');
const elastic = require('../../models/elasticSearch.js');
const router = new Router();

module.exports = router;

router.post('/', asyncMiddleware(async (req, res, next) => {
  console.log('THIS 1 HAPPENED');
  const newMerchant = await controllers.saveNewMerchant(req.body);
  controllers.saveNewStream(newMerchant[0].dataValues);
  console.log('THIS 2 HAPPENED', newMerchant);
  // Duplicate the edited merchant to Elastic Search
  elastic.index({
   index: 'bgm_merchants',
   type: 'merchant',
   id: newMerchant[0].dataValues.id || 'Missing ID',
   body: {
    logo: newMerchant[0].dataValues.logo || 'Missing Logo',
    username: newMerchant[0].dataValues.username || 'Missing Username',
    website: newMerchant[0].dataValues.website || 'Missing Website',
    rating: newMerchant[0].dataValues.rating || 0,
    location: newMerchant[0].dataValues.location || 'Missing Location',
    email: newMerchant[0].dataValues.email || 'Missing Email',
    facebook: newMerchant[0].dataValues.facebook || 'Missing Facebook',
    twitter: newMerchant[0].dataValues.twitter || 'Missing Twitter',
    description: newMerchant[0].dataValues.description || 'Missing Description',
    currentProduct: newMerchant[0].dataValues.currentProduct || 0,
    storeName: newMerchant[0].dataValues.storeName || 'Missing StoreName',
    sub: newMerchant[0].dataValues.sub || 1,
    facebook: newMerchant[0].dataValues.facebook || 'Missing Facebook',
    createdAt: newMerchant[0].dataValues.createdAt || null,
    updatedAt: newMerchant[0].dataValues.updatedAt || null
   }
  }, (err, res) => {
    if (err) { console.error(err) } 
    else {
      console.log(`Added brand new registered Merchant to Elastic! ${res}`);
    }
  }); 

  res.json(newMerchant);
}));



router.get('/', asyncMiddleware(async (req, res, next) => {
  const rows = await controllers.getAllMerchants();
  res.json(rows);
}));

router.get('/:merchantId', asyncMiddleware(async (req, res, next) => {
  const merchant = await controllers.findOneMerchant(req.params.merchantId);
  console.log('request parameters', req.params);
  res.json(merchant);
}));

router.get('/bySub/:merchantIdToken', asyncMiddleware(async (req, res, next) => {
  const merchant = await controllers.findOneMerchantBySub(req.params.merchantIdToken);
  res.json(merchant);
}));

router.put('/:merchantId', asyncMiddleware(async (req, res, next) => {
  const merchant = await controllers.editMerchantProfile(req.params.merchantId, req.body.profile);

  // Duplicate the edited merchant to Elastic Search
  elastic.index({
   index: 'bgm_merchants',
   type: 'merchant',
   id: merchant.dataValues.id || 'Missing ID',
   body: {
    logo: merchant.dataValues.logo || 'Missing Logo',
    username: merchant.dataValues.username || 'Missing Username',
    website: merchant.dataValues.website || 'Missing Website',
    rating: merchant.dataValues.rating || 0,
    location: merchant.dataValues.location || 'Missing Location',
    email: merchant.dataValues.email || 'Missing Email',
    facebook: merchant.dataValues.facebook || 'Missing Facebook',
    twitter: merchant.dataValues.twitter || 'Missing Twitter',
    description: merchant.dataValues.description || 'Missing Description',
    currentProduct: merchant.dataValues.currentProduct || 0,
    storeName: merchant.dataValues.storeName || 'Missing StoreName',
    sub: merchant.dataValues.sub || 1,
    facebook: merchant.dataValues.facebook || 'Missing Facebook',
    createdAt: merchant.dataValues.createdAt || null,
    updatedAt: merchant.dataValues.updatedAt || null
   }
  }, (err, res) => {
    if (err) { console.error(err) } 
    else {
      console.log(`Added new item to Elastic! ${res}`);
    }
  }); 

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
