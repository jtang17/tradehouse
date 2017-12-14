module.exports = (sequelize, DataTypes) =>
  sequelize.define('shopping_carted_product', {
    quantity: DataTypes.INTEGER,
  });
