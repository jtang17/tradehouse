module.exports = (sequelize, DataTypes) => {
  return sequelize.define('product', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    quantity: DataTypes.INTEGER
  });
};
