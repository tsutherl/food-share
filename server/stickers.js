const Sticker = require('APP/db/models/sticker')

const stickers = require('express').Router()
    .get('/', (req, res, next) =>
        Sticker.findAll()
            .then(stickers =>
                res.send(stickers)
            )
    )
    .get('/:id',(req, res, next) =>
    	Sticker.findById(req.params.id)
    	.then(sticker => {
    		console.log(sticker)
    		res.send(sticker)
    		}
    	)
    )

module.exports = stickers

