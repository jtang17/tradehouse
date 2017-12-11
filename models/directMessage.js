module.exports = (sequelize, DataTypes) => {
  return sequelize.define('direct_message', {
    body: DataTypes.TEXT
  });
};
