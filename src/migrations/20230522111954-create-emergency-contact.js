'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EmergencyContacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.ENUM('primary', 'secondary')
      },
      phoneNumber: {
        type: Sequelize.BIGINT
      },
      relationship: {
        type: Sequelize.STRING
      },
      employeeId: {
        type: Sequelize.INTEGER , 
        onDelete : "CASCADE" , 
        references : {
          model : "Employees",
          key : 'id',
          as : 'employeeId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EmergencyContacts');
  }
};