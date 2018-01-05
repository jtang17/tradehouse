const Router = require('express-promise-router');
const controllers = require('../../controllers/controllers');
const asyncMiddleware = require('./utils/asyncMiddleware');
const elastic = require('../../models/elasticSearch.js');

const router = new Router();

module.exports = router;

router.post('/', asyncMiddleware(async (req, res, next) => {
  const newMerchant = await controllers.saveNewMerchant(req.body);
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
      updatedAt: newMerchant[0].dataValues.updatedAt || null,
    },
  }, (err, res) => {
    if (err) { console.error(err); } else {
      console.log(`Added brand new registered Merchant to Elastic! ${res}`);
    }
  });

  const newStream = await controllers.saveNewStream(newMerchant[0].dataValues);

  // Duplicate the edited merchant to Elastic Search
  elastic.index({
    index: 'bgm_streams',
    type: 'stream',
    id: newStream.dataValues.id || 'Missing ID',
    body: {
      id: newStream.dataValues.id || 0,
      storeName: newStream.dataValues.storeName || 'Missing Storename',
      description: newStream.dataValues.description || 'Missing Description',
      logo: newStream.dataValues.logo || 'Missing Logo',
      url: newStream.dataValues.url || 'Missing Username',
      currentProduct: newStream.dataValues.currentProduct || 0,
      broadcastMessage: newStream.dataValues.broadcastMessage || 0,
      live: newStream.dataValues.live || false,
      merchantId: newStream.dataValues.merchantId || 'Missing Merchant',
      createdAt: newStream.dataValues.createdAt || 'Missing CreatedAt',
      updatedAt: newStream.dataValues.updatedAt || 'Missing EditedAt',
    },
  }, (err, res) => {
    if (err) { console.error(err); } else {
      console.log(`Created a new stream for ${newMerchant[0].dataValues.username} ${res}`);
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
      updatedAt: merchant.dataValues.updatedAt || null,
    },
  }, (err, res) => {
    if (err) { console.error(err); } else {
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
  const streamInfo = await controllers.editStream(req.body, req.params.merchantId);
  console.log('stream Info', streamInfo);
  // Duplicate the edited merchant to Elastic Search
  elastic.index({
    index: 'bgm_streams',
    type: 'stream',
    id: streamInfo.dataValues.id || 'Missing ID',
    body: {
      id: streamInfo.dataValues.id || 0,
      url: streamInfo.dataValues.url || 'Missing Username',
      storeName: streamInfo.dataValues.storeName || 'Missing Storename',
      description: streamInfo.dataValues.description || 'Missing Description',
      logo: streamInfo.dataValues.logo || 'Missing Logo',
      currentProduct: streamInfo.dataValues.currentProduct || 0,
      broadcastMessage: streamInfo.dataValues.broadcastMessage || 0,
      live: streamInfo.dataValues.live || false,
      merchantId: streamInfo.dataValues.merchantId || 'Missing Merchant',
      createdAt: streamInfo.dataValues.createdAt || 'Missing CreatedAt',
      updatedAt: streamInfo.dataValues.updatedAt || 'Missing EditedAt',
    },
  }, (err, res) => {
    if (err) { console.error(err); } else {
      console.log(`Updated Stream info for ${streamInfo.dataValues.merchantId} ${res}`);
    }
  });
  // Add Elastic Search Edit Stream functionality


  res.json(streamInfo);
}));

router.put('/:merchantId/featured', asyncMiddleware(async (req, res, next) => {
  const featuredProduct = await controllers.editMerchantFeaturedProduct(req.body, req.params.merchantId);
  res.json(featuredProduct);
}));
