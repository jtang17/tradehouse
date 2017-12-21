module.exports = (sequelize, DataTypes) =>
  sequelize.define('product', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    quantity: DataTypes.INTEGER,
    unitPrice: DataTypes.DOUBLE(6, 2),
    imageUrl: DataTypes.TEXT,
  });
