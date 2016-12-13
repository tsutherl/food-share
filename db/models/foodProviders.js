
'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const foodProvider = db.define('foodProvider', {
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
  //, location array
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
})


module.exports = Review