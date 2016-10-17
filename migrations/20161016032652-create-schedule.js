'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      barbershop_id: {
        type: Sequelize.STRING
      },
      client_id: {
        type: Sequelize.STRING
      },
      month: {
        type: Sequelize.STRING
      },
      day: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      request_by: {
        type: Sequelize.STRING
      },
      request_accept: {
        type: Sequelize.STRING
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Schedules');
  }
};
