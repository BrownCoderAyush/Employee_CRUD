'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.EmergencyContact, {
        foreignKey: 'employeeId'
      })
    }
  }
  Employee.init({
    name: {
      type: DataTypes.STRING,
      require: true
    },
    jobTitle: {
      type: DataTypes.STRING,
      require: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      require: true
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      require: true
    },
    address: {
      type: DataTypes.STRING,
      require: true
    },
    city: {
      type: DataTypes.STRING,
      require: true
    },
    state: {
      type: DataTypes.STRING,
      require: true
    }

  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};