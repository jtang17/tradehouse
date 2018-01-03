const elastic = require('../models/elasticSearch.js');

elastic.indices.delete({
	index: 'bgm_products'
}, (err, res, status) => {
	if (err) {
		console.log(err);
	}
	else {
		console.log("deleted", res);
	}
});

elastic.indices.delete({
	index: 'bgm_streams'
}, (err, res, status) => {
	if (err) {
		console.log(err);
	}
	else {
		console.log("deleted", res);
	}
});

elastic.indices.delete({
	index: 'bgm_merchants'
}, (err, res, status) => {
	if (err) {
		console.log(err);
	}
	else {
		console.log("deleted", res);
	}
});