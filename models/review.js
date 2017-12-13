module.exports = (sequelize, DataTypes) =>
  sequelize.define('review', {
    rating: DataTypes.INTEGER,
    text: DataTypes.TEXT,
  });
