const db = require('APP/db');
const Sequelize = require('sequelize');

module.exports = db.define('orderMaster', {
	total: {
		type: Sequelize.FLOAT
	},
	completed: Sequelize.BOOLEAN	
})