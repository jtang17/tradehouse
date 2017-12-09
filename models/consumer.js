module.exports = (sequelize, DataTypes) => {
  return sequelize.define('consumer', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });
};
