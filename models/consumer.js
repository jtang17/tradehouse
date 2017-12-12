module.exports = (sequelize, DataTypes) =>
  sequelize.define('consumer', {
    username: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
  });
