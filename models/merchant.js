module.exports = (sequelize, DataTypes) =>
  sequelize.define('merchant', {
    logo: DataTypes.STRING,
    username: { type: DataTypes.STRING, unique: true },
    website: DataTypes.STRING,
    location: DataTypes.TEXT,
    email: DataTypes.STRING,
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    description: DataTypes.TEXT,
  });
