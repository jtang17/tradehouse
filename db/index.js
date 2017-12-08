const Sequelize = require('sequelize');
const sequelize = new Sequelize('tradehouse_streams', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('connected to sql');
  })
  .catch((err) => {
    return console.error('unable to connect to sql: ', err);
  });

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

module.exports.User = User;
