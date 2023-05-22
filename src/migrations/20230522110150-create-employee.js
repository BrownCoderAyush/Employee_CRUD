'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING , 
        required : true 
      },
      jobTitle: {
        type: Sequelize.STRING , 
        required : true
      },
      email: {
        type: Sequelize.STRING , 
        required : true , 
        unique : true 
      },
      phoneNumber: {
        type: Sequelize.BIGINT ,
        required : true 
      },
      address: {
        type: Sequelize.STRING ,
        required : true 
      },
      city: {
        type: Sequelize.STRING , 
        required : true 
      },
      state: {
        type: Sequelize.STRING , 
        required : true 
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
    await queryInterface.dropTable('Employees');
  }
};