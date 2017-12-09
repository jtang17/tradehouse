module.exports = (sequelize, DataTypes) => {
  // TODO: enforce unique usernames
  return sequelize.define('consumer', {
    username: { type: DataTypes.STRING },
    password: DataTypes.STRING
  });
};
