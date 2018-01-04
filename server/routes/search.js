const Router = require('express-promise-router');
const controllers = require('../../controllers/controllers');
const asyncMiddleware = require('./utils/asyncMiddleware');
const elastic = require('../../models/elasticSearch.js');

const router = new Router();

// All Streams
router.get('/allStreams', (req, res) => {
  const search = (index, body) =>
    elastic.search({
      index,
      body,
    });

  const searchAll = () => {
    const body = {
      size: 20,
      from: 0,
      query: {
        match_all: {},
      },
    };

    search('bgm_streams', body)
      .then((results) => {
        // console.log(`found ${JSON.stringify(results.hits.hits)} items.`);
        res.json(results.hits.hits);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  searchAll();
});

// Streams Search
router.get('/streams/:streamsQuery', (req, res) => {
  const search = (index, body) =>
    elastic.search({
      index,
      body,
    });

  const searchStreams = () => {
    const body = {
      size: 20,
      from: 0,
      query: {
        match: {
          broadcastMessage: {
            query: `${req.params.streamsQuery}`,
          },
        },
      },
    };

    search('bgm_streams', body)
      .then((results) => {
        console.log(
          'took milliseconds',
          results.took,
          'timed out?:',
          results.timed_out,
          'result.hits',
          results.hits.total,
        );
        if (results.timed_out == false && results.hits.total > 0) {
          res.json(results.hits.hits);
        } else {
          res.end('no results');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  searchStreams();
});

// All Merchants
router.get('/allMerchants', (req, res) => {
  const search = (index, body) =>
    elastic.search({
      index,
      body,
    });

  const searchAll = () => {
    const body = {
      size: 20,
      from: 0,
      query: {
        match_all: {},
      },
    };

    search('bgm_merchants', body)
      .then((results) => {
        // console.log(`found ${JSON.stringify(results.hits.hits)} items.`);
        res.json(results.hits.hits);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  searchAll();
});

// Merchants Search
router.get('/merchants/:merchantsQuery', (req, res) => {
  const search = (index, body) =>
    elastic.search({
      index,
      body,
    });

  const searchMerchants = () => {
    const body = {
      size: 20,
      from: 0,
      query: {
        multi_match: {
          query: `${req.params.merchantsQuery}`,
          fields: ['storeName', 'description', 'username'],
        },
      },
    };

    search('bgm_merchants', body)
      .then((results) => {
        console.log(
          'timed out',
          results.timed_out,
          'result.hits',
          results.hits.total,
        );
        if (results.timed_out == false && results.hits.total > 0) {
          res.json(results.hits.hits);
        } else {
          res.end('no results');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  searchMerchants();
});

// All Products
router.get('/allProducts', (req, res) => {
  const search = (index, body) =>
    elastic.search({
      index,
      body,
    });

  const searchAll = () => {
    const body = {
      size: 20,
      from: 0,
      query: {
        match_all: {},
      },
    };

    search('bgm_products', body)
      .then((results) => {
        console.log(
          'timed out',
          results.timed_out,
          'result.hits',
          results.hits.total,
        );
        if (results.timed_out == false && results.hits.total > 0) {
          res.json(results.hits.hits);
        } else {
          res.end('no results');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  searchAll();
});

// Products Search
router.get('/products/:productsQuery', (req, res) => {
  const search = (index, body) =>
    elastic.search({
      index,
      body,
    });

  const searchProducts = () => {
    const body = {
      size: 20,
      from: 0,
      query: {
        match: {
          title: {
            query: `${req.params.productsQuery}`,
          },
        },
      },
    };

    search('bgm_products', body)
      .then((results) => {
        console.log(
          'timed out',
          results.timed_out,
          'result.hits',
          results.hits.total,
        );
        if (results.timed_out == false && results.hits.total > 0) {
          res.json(results.hits.hits);
        } else {
          res.end('no results');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  searchProducts();
});

module.exports = router;

// rebase comments
