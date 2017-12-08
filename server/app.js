const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const store = require('../db/store.js');
const streams = require('../db/index.js');

app.use(express.static(path.join(__dirname, '/../client/public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public/index.html'));
});

app.listen(port, () => {
  console.log(`tradehouse server listening on port ${port}`);
});
