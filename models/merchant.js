module.exports = (sequelize, DataTypes) =>
  sequelize.define('merchant', {
    logo: DataTypes.STRING,
    username: { type: DataTypes.STRING, unique: true },
    website: DataTypes.STRING,
    rating: DataTypes.DOUBLE(3, 2),
    location: DataTypes.TEXT,
    email: { type: DataTypes.STRING, unique: true },
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    description: DataTypes.TEXT,
    stream: { type: DataTypes.STRING, unique: true },
    broadcastMessage: DataTypes.TEXT,
    currentProduct: DataTypes.TEXT,
    storeName: DataTypes.TEXT,
  });
