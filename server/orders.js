const Order = require('APP/db/models/order');
const User = require('APP/db/models/user');
const Sticker = require('APP/db/models/sticker');
const OrderMaster = require('APP/db/models/orderMaster');

//Require in Nodemailer and handlebars for email templates (we want to use templates because we send this to multiple users)
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

//Nodemailer requires a transport, we use the email that we are gonna send emails from 
//I used gmail as my server.. the setup info for smtp can be found on their website (https://support.google.com/a/answer/176600?hl=en)
const mailer= nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, 
  auth: {
    user: 'stick.yoself1609@gmail.com',//have to put the gmail username
    pass: 'gracehopper' //have to put the gmail password
  }
})

//I want my emails to use a template I store in this location (server/email/purchaseOrder)
//The template on that file is just like nunjucks. 
mailer.use('compile', hbs({
  viewPath: 'server/email', 
  ext: '.hbs'
}))



const orders = require('express').Router()
    //this is where the magic happens. 

    .post('/sendMail', function(req,res,next){
      console.log("------------------",req.body)
      //this is where the email data is sent. We use the .sendMail to send an email with the email data and callback function
      mailer.sendMail(
        {
          from: 'stick.yoself1609@gmail.com', //it is the same as the smtp email
          to: req.body.email,//the person that you are going to send it to
          subject: 'Your Purchase', 
          template: 'purchaseOrder',
          context: { //the context is passed to the template. It is the data we access. For example: {{total}}
            username: 'Partner',
            order: req.body.order,//I pass the whole order from the database. In the template I break apart the details
            total: req.body.total //the total cost of the order
          }
        },
        //it takes a callback function, it sends "good email" to the route if the email sent correctly. 
        function(err, response){
          if(err){
            console.log(err);
            return res.send('bad email');
          }
          return res.send('good email');
        })
      }
    )
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
