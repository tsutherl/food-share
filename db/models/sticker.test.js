'use strict'

const db = require('APP/db')
const Sticker = require('./sticker')
const {expect} = require('chai')


describe('Sticker', () => {
  before('wait for the db', () => db.didSync)

  it('has a name and price', () =>
    Sticker.create({
      name: 'Waterfall',
      price: 22.00
    }).then(product =>
      expect(product).to.contain({
        name: 'Waterfall',
        price: 22.00
      })
    )
  )
  it('can have a category and picture', () =>
      Sticker.create({
        name: 'Waterfall',
        price: 22.00,
        category: 'Enviormental',
        picture: 'http://mypic.jpg'
      }).then(product =>
        expect(product).to.contain({
          category: 'Enviormental',
          picture: 'http://mypic.jpg'
        })
      )
    )

    // it('picture must be a URL', () =>
    //   expect(
    //     Sticker.create({
    //       name: 'Waterfall',
    //       price: 22.00,
    //       category: 'Enviormental',
    //       picture: 'helloKitty'
    //     })
    //   ).to.throw(Error)
    // )

})