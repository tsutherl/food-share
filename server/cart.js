// const Order = require('APP/db/models/order');
// const User = require('APP/db/models/user');
// const Sticker = require('APP/db/models/sticker');
// const OrderMaster = require('APP/db/models/orderMaster');

// const cart = require('express').Router()




// .get('/:orderMasterId', function(req, res, next){
// 	OrderMaster.findById(req.params.orderMasterId)
// 	.then(foundOrder => {

// 	// security check below (if/else logic) commented out until we can check its functionality from front end	

// 	//	if (foundOrder.user_id !== req.user.id) return res.send(403)  
// 	// for now, line 12 just checks whether user ID from session matches the user whose order is being sought
// 	// we should add a check to let admin users access any order
// 	//	else{																
// 			Order.findAll({
// 				where: {order_master_id: req.params.orderMasterId}
// 			})
// 			.then(items => res.send(items))			
// 	//	}
// 	})
// 	.catch(next)
// })




// module.exports = cart