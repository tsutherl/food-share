
const db = require('APP/db')
const Sequelize = require('sequelize')

module.exports = db.define('stickers', {
  name: Sequelize.STRING,
  price: Sequelize.FLOAT,
  category: Sequelize.STRING,
  picture: {
  	type: Sequelize.STRING,
  	validate:{
  		isURL: true
  	}
  }
})