module.exports = (sequelize, DataTypes) =>
  sequelize.define('merchant_review', {
    rating: DataTypes.INTEGER,
    text: DataTypes.TEXT,
  });
