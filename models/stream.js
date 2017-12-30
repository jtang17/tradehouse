module.exports = (sequelize, DataTypes) =>
  sequelize.define('stream', {
    url: DataTypes.STRING,
    broadcastMessage: DataTypes.TEXT,
  });
