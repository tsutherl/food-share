
const db = require('APP/db')
const Sequelize = require('sequelize')

module.exports = db.define('orders', {
  productId: Sequelize.INTEGER,
  price: Sequelize.FLOAT,
  quantity: Sequelize.INTEGER,
  orderNumber: Sequelize.INTEGER,
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

