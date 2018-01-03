const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: '127.0.0.1:9200',
  log: 'error',
  apiVersion: '6.0',
});

client.ping({
  requestTimeout: 30000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

const indices = () => {
  return client.cat.indices({v: true})
  .then(result => console.log('INDICES RESULT', result))
  .catch((err) => {
    console.error(`Error connecting to indices information`)
  })
}

indices();

module.exports = client
