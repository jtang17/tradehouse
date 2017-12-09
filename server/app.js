const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controllers = require('../controllers/controllers.js');

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

app.post('/api/products', (req, res) => {
});

app.use(express.static(path.join(__dirname, '/../client/public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public/index.html'));
});

app.listen(port, () => {
  console.log(`Tradehouse server listening on port ${port}`);
});
