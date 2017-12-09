module.exports = (sequelize, DataTypes) => {
  // TODO: enforce unique usernames
  return sequelize.define('merchant', {
    username: { type: DataTypes.STRING },
    password: DataTypes.STRING
  });
};
