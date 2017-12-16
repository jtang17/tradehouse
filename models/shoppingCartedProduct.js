module.exports = (sequelize, DataTypes) =>
  sequelize.define('shopping_carted_product', {
    quantity: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    quantity: DataTypes.INTEGER,
    unitPrice: DataTypes.DOUBLE(6, 2),
  });
