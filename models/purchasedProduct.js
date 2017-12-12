module.exports = (sequelize, DataTypes) =>
  sequelize.define('purchased_product', {
    quantity: DataTypes.INTEGER,
  });
