const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const jwtCheck = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    ratedLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://tradehouse.auth0.com/.well-known/jwks.json',
  }),
  audience: 'tradehouse2-auth0.com/api',
  issuer: 'https://tradehouse.auth0.com',
  algorithms: ['RS256'],
});

module.exports = jwtCheck;
