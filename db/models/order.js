
const db = require('APP/db')
const Sequelize = require('sequelize')
const Sticker = require('./sticker');

module.exports = db.define('orders', {
  quantity: Sequelize.INTEGER,
  orderNumber: Sequelize.INTEGER,
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
},

{
	instanceMethods: {
		totalPrice: function() {
			Sticker.findAll({
				where: {id: this.product_id}
			})
			.then(sticker =>{
				return sticker.price * this.quantity
			})
		}
	}
}
)

