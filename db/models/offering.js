
'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const offering = db.define('offering', {
  //date, size/contents, expiration, if perishable, value(for tax purposes)

  //--> foodProviders ID, belongs to later
  // expirationDate and time, allowNull: true
  // postingDate--getter virtual date_created of the instance of the model
  // isPerishable boolean, allowNull: false
  // value .FLOAT price
  // description type: Sequelize.TEXT,


  expirationDate: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  isPerishable: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  value: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  state: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})


module.exports = Review