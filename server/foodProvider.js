const FoodProviders = require('APP/db/foodProviders/');
const foodProviders = require('express').Router()

foodProviders.get('/foodProviders', function(req, res, next){  //get pending items (cart items) for specific user
    FoodProviders.findAll()
        .then(foodProviders => {
          console.log("FOUND OFFER IN CALL", foodProviders)
          if(!foodProviders) {
            res.send([])
          })
          .then(items => res.send(items))
          }

      })
      .catch(next)
    })

module.exports = foodProviders
