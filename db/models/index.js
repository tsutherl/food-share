'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Sticker = require('./sticker');
const Order = require('./order');
const OrderMaster = require('./orderMaster');

//Order model is line items for each sticker ordered, ever

// OrderMaster model keeps track of orders as groups of items per user

//Order.belongsTo(User);   // may be able to delete this



Order.belongsTo(Sticker, {as: 'product'});

Order.belongsTo(OrderMaster);

OrderMaster.belongsTo(User);

//User.hasMany(OrderMaster);

OrderMaster.hasMany(Order);

module.exports = {User, Sticker, Order, OrderMaster}
