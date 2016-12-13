const FoodProviders = require('APP/db/foodProviders/');

const app = require('express').Router()

app.get('/foodProviders', function(req, res, next){  
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

app.post('/foodProviders', function(req, res, next){  
    FoodProviders.create(req.body)
        .then(()=>res.send(201))
      })
      .catch(next)
    })

module.exports = foodProviders
