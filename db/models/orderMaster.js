const db = require('APP/db');
const Sequelize = require('sequelize');

module.exports = db.define('orderMaster', {
	total: {
		type: Sequelize.FLOAT
	},
	completed: {
		type: Sequelize.BOOLEAN,
		defaultValue: false
	},
	purchaseMsg: Sequelize.TEXT		,
	purchaserEmail: {
		type: Sequelize.STRING,
		validate: {isEmail: true}
	},
	sendToEmail: {
		type: Sequelize.STRING,
		validate: {isEmail: true}
	}
})