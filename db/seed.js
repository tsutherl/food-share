const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'So Many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
  {name: 'Lamont George', email: 'monty@george.com', password: '1234'}, 
  {name: 'Hyacinth Mary', email: 'hyacinth@mary.com', password: '1234'}, 
  {name: 'Bob Henry', email: 'bob@henry.com', password: '1234'}, 
  {name: 'Chicken George', email: 'chicken@popeyes.com', password: '1234'}, 
  {name: 'Spongebob Squarepants', email: 'bikini@bottom.com', password: '1234'}, 
  {name: 'Squidward Henry', email: 'clarinet@society.com', password: '1234'},
  {name: 'Cara Weber', email: 'cara@gmail.com', password: '1234'}, 
  {name: 'Ashi Krishnan', email: 'ashi@ashi.com', password: '1234'},
], user => db.model('users').create(user))

const seedStickers = () => db.Promise.map([
  {name: 'Save a Puppy', category: 'Animal Health and Happiness', price: '17.39', picture: 'https://ih1.redbubble.net/image.60977294.4128/sticker,375x360.u1.png'},
  {name: 'Rainforest', category: 'Enviornment', price: '12.99', picture: 'http://www.unixstickers.com/image/data/stickers/bower/Bower.sh.png'},
  {name: 'Day of the Dead', category: 'Mexican', price: '39.74', picture:'https://ih1.redbubble.net/image.120480953.2435/sticker,375x360.png'},
  {name: 'Pizza for the Homeless', category: 'Food', price: '2.99', picture: 'http://d6ce0no7ktiq.cloudfront.net/images/preview/2015/10/05/design-5762/template-sticker-600x600.png'},
  {name: 'Git', category: 'Technology', price: '139.74', picture:'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/1488/medium/1402940451/git-icon-stickers.png'},
  {name: 'Hurricane Relief', category: 'Enviornment', price: '50.00', picture: 'http://www.unixstickers.com/image/data/stickers/debian/debian_shaped.sh.png'},
  {name: 'Stop People from Smoking!!!', category: 'Health', price: '27.37', picture: 'http://images.mydoorsign.com/img/lg/S/no-smoking-modular-door-sign-s-9696.png'},
   {name: 'Help the Single Stop being Single', category: 'Mental Health', price: '37.00', picture: 'http://www.bumperstickerz.com/images/1000345-04-00-00-00_lg.png'},
  {name: 'Keep Mother Earth Clean', category: 'Enviornment', price: '16.37', picture: 'https://www.peaceproject.com/sites/default/files/imagecache/700wide-500-high/LS190-Peace-Dove-Bumper-Sticker.png'},
  {name: 'Help Cancer Patients Celebrate Their Birthday', category: 'Health', price: '47.57', picture: 'https://ih1.redbubble.net/image.120563886.3008/sticker,375x360.u3.png'},
], sticker => db.model('stickers').create(sticker))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedStickers)
  .then(stickers => console.log(`Seeded ${stickers.length} stickers OK`))
  .catch(error => console.error(error))    
  .finally(() => db.close())
