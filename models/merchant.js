module.exports = (sequelize, DataTypes) => {
  return sequelize.define('merchant', {
    username: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING
  });
};
