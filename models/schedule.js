'use strict';
module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define('Schedule', {
    barbershop_id: DataTypes.STRING,
    client_id: DataTypes.STRING,
    month: DataTypes.STRING,
    day: DataTypes.STRING,
    year: DataTypes.STRING,
    time: DataTypes.STRING,
    request_by: DataTypes.STRING,
    request_accept: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Schedule;
};