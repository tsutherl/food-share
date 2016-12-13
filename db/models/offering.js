
'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Offering = db.define('offerings', {
  // Other optional fields size/contents
  //--> foodProviders ID, belongs to later
  // postingDate--getter virtual date_created of the instance of the model

  expirationDate: {
    type: Sequelize.DATEONLY,
    allowNull: true //because some items are barely perishable like cans or rice
  },
  isPerishable: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  value: {
    type: Sequelize.FLOAT, //$ amount for tax deductions
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})


module.exports = Offering