const Sticker = require('APP/db/models/sticker')


// Sticker.create({
//             name: 'Waterfall',
//             price: 100.0}).then(sticker => console.log("my Created Sticker", sticker))

const stickers = require('express').Router()
    .get('/', (req, res, next) =>
        Sticker.findAll()
            .then(stickers =>
                res.send(stickers)
            )
    )
    .post('/', function(req, res, next){
        Sticker.create(req.body)
        .then(sticker => {
            res.status(201).send(sticker)
        })
    })
    .get('/:id',(req, res, next) =>
    	Sticker.findById(req.params.id)
    	.then(sticker =>
    		res.send(sticker)
    	)
    )






module.exports = stickers

