const Router = require('express-promise-router');
const controllers = require('../../controllers/controllers');
const asyncMiddleware = require('./utils/asyncMiddleware');
const elastic = require('../../models/elasticSearch.js');

const router = new Router();

// All Streams
// router.get('/', (req, res) => {
//   const search = (index, body) => {
//   	return elastic.search({
//   		index: index,
//   		body: body
//   	});
//   }

//   const searchAll = () => {
//   	let body = {
//   		size: 20,
//   		from: 0,
//   		query: {
//   			match_all: {}
//   		}
//   	}

//   	search('bgm_streams', body)
//   		.then((results) => {
//   			console.log(`found ${results} items.`);
//   		})
//   		.catch(console.error)
//   }

// });


router.get('/:searchTerm', (req, res) => {
  res.end('response');
});

module.exports = router;
