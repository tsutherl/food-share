const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Sticker = require('APP/db/models/sticker')
const app = require('./start')

describe('/api/stickers', () => {
  const stickers = [
          {
            id: 1,
            name: 'Waterfall',
            price: 100.0
          },
          {
            id: 2,
            name: 'Puzzle box',
            price: 50.0
          },
          {
            id: 3,
            name: 'Ominous Cavern',
            price: 12.99
          }    
  ]
  const [waterfall, puzzleBox, cavern]
    = stickers

  before('sync database & make stickers', () =>
    db.didSync
      .then(() => Sticker.destroy({where:{}}))
      .then(() => stickers.map(
        sticker => Sticker.create(sticker)
      ))
  )


  it('GET / lists all stickers', () =>
    request(app)
      .get(`/api/stickers`)
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length(stickers.length)
        const [
          gotWaterfall,
          gotPuzzleBox,
          gotCavern ] = res.body
        expect(gotWaterfall).to.contain(waterfall)
        expect(gotPuzzleBox).to.contain(puzzleBox)
        expect(gotCavern).to.contain(cavern)
      })
  )

  it('GET /:id gets one sticker', () =>
    request(app)
      .get(`/api/stickers/3`)
      .expect(200)
      .then(res => {
        const gotCavern = res.body
        expect(gotCavern).to.contain(cavern)
      })
  )







})