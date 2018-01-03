module.exports = (sequelize, DataTypes) =>
  sequelize.define('stream', {
    url: DataTypes.STRING,
    broadcastMessage: DataTypes.TEXT,
    currentProduct: DataTypes.TEXT,
    live: DataTypes.BOOLEAN,
  });
