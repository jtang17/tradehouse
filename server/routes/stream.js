const Router = require('express-promise-router');
const jwtAuthz = require('express-jwt-authz');
const controllers = require('../../controllers/controllers');
const asyncMiddleware = require('./utils/asyncMiddleware');
const jwtCheck = require('./utils/authMiddleware');

const router = new Router();

router.get('/', asyncMiddleware(async (req, res, next) => {
  const streams = await controllers.getAllStreams();
  res.json(streams);
}));

module.exports = router;