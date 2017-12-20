module.exports = (sequelize, DataTypes) =>
  sequelize.define('customer', {
    username: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    // sub: { type: DataTypes.STRING, unique: true }, // this really should be unique, but removing the constraint for now makes seeding less annoying
    sub: { type: DataTypes.STRING },
  });
