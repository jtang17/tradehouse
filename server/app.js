const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controllers = require('../controllers/controllers.js');
const db = require('../models/index.js');

const app = express();
const port = process.env.PORT || 5421;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Webpack Hot Reloads */
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');

const compiler = webpack(config);
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true,
    },
  })
);
app.use(webpackHotMiddleware(compiler));

app.post('/api/merchants', (req, res) => {
  // // example data
  // req.body = {
  //   username: 'bob',
  //   password: 'aaa'
  // };

  controllers
    .saveNewMerchant(req.body)
    .then(() => {
      res.send('saved merchant');
    })
    .catch((err) => {
      return console.error(err);
    });
});

app.post('/api/products', (req, res) => {
  // // example data
  // req.body = {
  //   productName: 'toothpaste',
  //   description: 'minty',
  //   productQuantity: '5',
  //   price: '4.99',
  //   merchantId: '1'
  // };

  controllers
    .saveNewProduct(req.body)
    .then(() => {
      res.send('saved product');
    })
    .catch((err) => {
      return console.error(err);
    });
});

app.use(express.static(path.join(__dirname, '/../client/public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public/index.html'));
});

// TODO: prevent sync from outputting so much to console
db.sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Tradehouse server listening on port ${port}`);
    });
  });
