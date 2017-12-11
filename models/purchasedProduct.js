module.exports = (sequelize, DataTypes) => {
  return sequelize.define('purchased_product', {
    quantity: DataTypes.INTEGER
  });
};
