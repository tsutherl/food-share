
'use strict';
const geocode = require( '../../utils/geocode');
const Sequelize = require('sequelize');
const db = require('APP/db');

const foodProviders = db.define('foodProvider', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: true
  }
});

foodProviders.hook('beforeUpdate', function (foodProviders) {
    if (!foodProviders.location) {
      let addressString = foodProviders.address + ', ' + foodProviders.city + ', ' + foodProviders.state;
      foodProviders.location = geocode(addressString);
    }
});


module.exports = foodProviders;
