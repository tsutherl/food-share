
const FoodProviders = require('APP/db/models/foodProviders');
const foodProviders = require('express').Router()

foodProviders.get('/', function(req, res, next){  //get pending items (cart items) for specific user

    FoodProviders.findAll()
        .then(foodProviders => {
          console.log("FOUND OFFER IN CALL", foodProviders)
          if(!foodProviders) {
            res.send([])
          }
          return foodProviders
        })
        .then(items => res.send(items))
        .catch(next)
})

foodProviders.post('/foodProviders', function(req, res, next){  
    FoodProviders.create(req.body)
        .then(()=>res.send(201))
      })
      .catch(next)
    })

module.exports = foodProviders
