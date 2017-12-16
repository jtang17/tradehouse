module.exports = (sequelize, DataTypes) =>
  sequelize.define('shopping_carted_product', {
    quantity: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    unitPrice: DataTypes.DOUBLE(6, 2),
  });
