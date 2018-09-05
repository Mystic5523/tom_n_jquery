module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define("Car", {
    make: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    doors: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Car.associate = function(models) {
    Car.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Car;
};
