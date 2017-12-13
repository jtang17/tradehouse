module.exports = (sequelize, DataTypes) =>
  sequelize.define('product_review', {
    rating: DataTypes.INTEGER,
    text: DataTypes.TEXT,
  });
