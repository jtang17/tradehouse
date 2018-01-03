const Router = require('express-promise-router');
const controllers = require('../../controllers/controllers');
const asyncMiddleware = require('./utils/asyncMiddleware');

const router = new Router();

router.get('/', (req, res) => {
  console.log(req.body);
});

module.exports = router;
