const Order = require('APP/db/models/order');
const User = require('APP/db/models/user');
const Sticker = require('APP/db/models/sticker');
const OrderMaster = require('APP/db/models/orderMaster');

const orders = require('express').Router()



    // *** GET REQUEST below IS WORKING (w/o security check though)
    
    .get('/users/:userId', function(req, res, next){  //get pending items (cart items) for specific user
        OrderMaster.findOne({where:
          {user_id: req.params.userId, completed: false}
        })
        .then(foundOrder => {
      //security check commented out for now!  test from front end.

      //  if (foundOrder.user_id !== req.user.id) return res.send(403)  
      // for now, line 12 just checks whether user ID from session matches the user whose order is being sought
      // we should add a check to let admin users access any order
      //  else{                               
          Order.findAll({
            where: {order_master_id: foundOrder.id},
            include: [{model: Sticker,
                       as: 'product'}]
            })
        
          .then(items => res.send(items))     
      //  }
      })
      .catch(next)
    })
      



//POST route below either finds an open order for the user in question OR creates one, in either case it 
// pulls the orderMasterID from that order (existing or newly created), then posts a new line item to Orders
// with the correct product ID and orderMasterID

    .post('/users/:userId/:productId', function(req, res, next){      
      OrderMaster.findOrCreate({
        where: {user_id: req.params.userId,
                completed: false}
      })
      .spread((orderToChange,bool) =>{
        Order.create({
          product_id: req.params.productId,
          order_master_id: orderToChange.dataValues.id
        })
        .then(()=>res.send(201))
      })
      .catch(next)
    })



    .put('/users/:userId', function(req, res, next){         //mark an order as complete (in OrderMaster)
        OrderMaster.findOne({where:
          {user_id: req.params.userId, completed: false}
        })
        .then(foundOrder => {
      //security check commented out for now!  test from front end.

      //  if (foundOrder.user_id !== req.user.id) return res.send(403)  
      // for now, line 12 just checks whether user ID from session matches the user whose order is being sought
      // we should add a check to let admin users access any order
      //  else{                               
          foundOrder.update({completed: true}) 
          .then(res.sendStatus(201))    
      //  }
      })
      .catch(next)
    })


//DELETE route deletes the first item in Orders that matches the orderMasterId and productID

    .delete('/users/:userId/:productId', function(req, res, next){
      OrderMaster.findOne({where:
          {user_id: req.params.userId, completed: false}
        })
      .then(foundOrder =>{
        Order.findOne({where: 
          {product_id: req.params.productId}
        })
        .then(orderItem => orderItem.destroy())
        .then(()=> res.sendStatus(204))
      })
      .catch(next)
    })


module.exports = orders
