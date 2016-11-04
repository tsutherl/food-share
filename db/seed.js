const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'So Many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedStickers = () => db.Promise.map([
  {name: 'Rainforest', category: 'Enviornment', price: '12.99', picture: 'http://www.unixstickers.com/image/data/stickers/bower/Bower.sh.png'},
  {name: 'Day of the Dead', category: 'Mexican', price: '39.74', picture:'https://ih1.redbubble.net/image.120480953.2435/sticker,375x360.png'},
  {name: 'Pizza for the Homeless', category: 'Food', price: '2.99', picture: 'http://d6ce0no7ktiq.cloudfront.net/images/preview/2015/10/05/design-5762/template-sticker-600x600.png'},
  {name: 'Git', category: 'Technology', price: '139.74', picture:'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/1488/medium/1402940451/git-icon-stickers.png'},
], sticker => db.model('stickers').create(sticker))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedStickers)
  .then(stickers => console.log(`Seeded ${stickers.length} stickers OK`))
  .catch(error => console.error(error))    
  .finally(() => db.close())
