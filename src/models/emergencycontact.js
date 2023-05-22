'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmergencyContact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Employee , {
        foreignKey : 'employeeId',
        onDelete : 'CASCADE'
      })
    }
  }
  EmergencyContact.init({
    name: DataTypes.STRING,
    level: DataTypes.ENUM('primary', 'secondary'),
    phoneNumber: DataTypes.INTEGER,
    relationship: DataTypes.STRING,
    employeeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EmergencyContact',
  });
  return EmergencyContact;
};