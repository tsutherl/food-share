const Order = require('APP/db/models/order');
const User = require('APP/db/models/user');

const orders = require('express').Router()
    .get('/:orderId', (req, res, next) =>
        Order.findAll({where: {
            orderNumber: req.params.orderId
                }
            })
            .then(items =>
                res.send(items)
            )
            .catch(next))

    .get('/users/:userId', function(req, res, next){
        Order.findAll({where: {
            user_id: req.params.userId,
            completed: false
        }})
        .then(items =>
              res.send(items))
        .catch(next)
    })

    .post('/users/:userId', function(req, res, next){
        Order.findAll({
            where: {
                user_id: req.params.userId,
                completed: false
            }
        })
        .then(function(items){
            if (items.length) {
              req.body.orderNumber = items[0].orderNumber;
              req.body.user_id = req.params.userId;
              Order.create(req.body)
              .then(function(){
                res.send(201)
              })
              .catch(next)
            }//add new item to current cart
            else {
              let lastOrder;
              User.findById(req.params.userId)
              .then(function(user){
                lastOrder = user.lastCompletedOrder
                req.body.orderNumber = lastOrder+1;
                req.body.user_id = req.params.userId;
                Order.create(req.body)
                .then(item => res.send(201))
              })
              .catch(next)
            } //make new cart
        })
    })
    .put('/users/:userId', function(req, res, next){
      let currentOrder;
      Order.findAll({where: {
        user_id: req.params.userId,
        completed: false
      }})
      .then(function(items){
        currentOrder = items[0].orderNumber
        Promise.all(
        items = items.map(function(item){
          item.update({completed: true})
        }))
      .then(function(items){
        User.findById(req.params.userId)
        .then(function(user){
          user.update({lastCompletedOrder: currentOrder})
        })
        .then(user => res.send(201))

      })
      .catch(next)
      })
    })
    .delete('/users/:userId', function(req, res, next) {
      Order.findOne({where: req.body})
      .then(function(item){
        item.destroy()
      })
      .then(item => res.send(204))

    })


module.exports = orders
