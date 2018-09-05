module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Car, {
      onDelete: "cascade"
    });
  };

  return User;
};
