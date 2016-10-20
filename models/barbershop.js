'use strict';
module.exports = function(sequelize, DataTypes) {
  var Barbershop = sequelize.define('Barbershop', {
    barbershop_id: DataTypes.STRING,
    barbershop_username: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    contact_first_name: DataTypes.STRING,
    contact_last_name: DataTypes.STRING,
    email_address: DataTypes.ADDRESS,
    phone: DataTypes.STRING,
    bio: DataTypes.STRING,
    open_time: DataTypes.TIME,
    close_time: DataTypes.TIME
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Barbershop;
};`