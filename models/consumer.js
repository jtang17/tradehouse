module.exports = (sequelize, DataTypes) => {
  return sequelize.define('consumer', {
    username: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING
  });
};
