module.exports = (sequelize, DataTypes) =>
  sequelize.define('direct_message', {
    body: DataTypes.TEXT,
  });
