module.exports = (sequelize, DataTypes) => {
  return sequelize.define('merchant', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });
};
