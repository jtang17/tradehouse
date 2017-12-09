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
  res.json(newMerchant);
}));

router.get('/', asyncMiddleware(async (req, res, next) => {
  const rows = await controllers.getAllMerchants();
  res.json(rows);
}));
