module.exports = (sequelize, DataTypes) =>
  sequelize.define('customer', {
    username: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
  });
