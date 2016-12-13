const db = require('APP/db')
console.log('***', db.models)

const seedFoodProviders = () => db.Promise.map([
  {name: 'Bouley', address: '75 Wall St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.705137, -74.013940], type: 'restaurant'},
  {name: 'Marc Forgione', address: '134 Reade St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.716526, -74.009567], type: 'restaurant'},
  {name: 'Tamarind', address: '99 Hudson St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.718977, -74.008929], type: 'restaurant'},
  {name: 'Hop Lee Restaurant', address: '16 Mott St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.714230, -73.998509], type: 'restaurant'},
  {name: 'Jungsik', address: '2 Harrison St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.718679, -74.008900], type: 'restaurant'},
  {name: 'The Capital Grille', address: '120 Broadway', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.708475, -74.010846], type: 'restaurant'},
  {name: 'Pylos', address: '128 E 7th St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.726096, -73.984152], type: 'restaurant'},
  {name: 'Club Quarters', address: '140 Washington St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.709630, -74.013940], type: 'hotel' }
  ], foodProvider => db.model('foodProviders').create(foodProvider));
//const foodProviders = db.define('foodProviders', {

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
  {name: 'Ashi Krishnan', email: 'ashi@ashi.com', password: '1234'}
], user => db.model('users').create(user))
//const User = db.define('users', {

    const seedOfferings = () => db.Promise.map([
  {expirationDate: '01-01-2017', isPerishable: 'true', value: '30', description:'food'},
  {expirationDate: '02-01-2017', isPerishable: 'true', value: '30', description:'food'},
  {expirationDate: '03-01-2017', isPerishable: 'true', value: '30', description:'food'},
  {expirationDate: '04-01-2017', isPerishable: 'true', value: '30', description:'food'},
  {expirationDate: '05-01-2017', isPerishable: 'true', value: '30', description:'food'}
  ], offering => db.model('offerings').create(offering));



db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`)) 
  .then(seedOfferings)
  .then(offerings => console.log(`Seeded ${offerings.length} stickers OK`))
  .then(seedFoodProviders)
  .then(foodProviders => console.log(`Seeded ${foodProviders.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close());



// ,
//   {name: 'Joes Shanghai', address: '9 Pell St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.714601, -73.997761], type: 'restaurant'},
//   {name: 'Cafe Katja', address: '79 Orchard St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.717719, -73.990565], type: 'restaurant'},
//   {name: 'Rosanjin', address: '141 Duane St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.716403, -74.007724], type: 'restaurant'},
//   {name: 'Kittichai', address: '60 Thompson St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.724014, -74.003242], type: 'restaurant'},
//   {name: 'Bianca Restaurant', address: '5 Bleecker St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.725495, -73.992662], type: 'restaurant'},
//   {name: 'Rayuela', address: '165 Allen St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.721266, -73.989756], type: 'restaurant'},
//   {name: 'Mas Farmhouse', address: '39 Downing St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.729269, -74.003875], type: 'restaurant'},
//   {name: 'Xe Lua', address: '86 Mulberry St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.716544, -73.998626], type: 'restaurant'},
//   {name: 'Andaz Wall Street', address: '75 Wall St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.705137, -74.007624], type: 'hotel' },
//   {name: 'Hotel Mulberry', address: '52 Mulberry St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.715317, -73.999542], type: 'hotel' },
//   {name: 'The Ritz-Carlton New York, Battery Park', address: 'Two West Street', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.705417, -74.017241], type: 'hotel' },
//   {name: 'Wall Street Inn', address: '9 S William St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.704581, -74.010273], type: 'hotel' },
//   {name: 'Smyth TriBeCa', address: '85 West Broadway', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.715076, -74.009301], type: 'hotel' },
//   {name: 'Double Tree', address: '8 Stone St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.703961, -74.012350], type: 'hotel' },
//   {name: 'Hotel 91', address: '91 E Broadway', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.713427, -73.993624], type: 'hotel' },
//   {name: 'Conrad New York Hotel', address: '102 N End Ave', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.714985, -74.015841], type: 'hotel' },
//   {name: 'Millenium Hilton Hotel', address: '55 Church St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.711597, -74.010392], type: 'hotel' },
//   {name: 'US Pacific Hotel', address: '106 Bowery', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.717873, -73.995231], type: 'hotel' },
//   {name: 'Gild Hall, a Thompson Hotel', address: '15 Gold Street', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.707894, -74.007108], type: 'hotel' },
//   {name: 'W New York', address: '123 Washington Street', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.709102, -74.013997], type: 'hotel' },
//   {name: 'New York Marriott Downtown', address: '85 W St at Albany St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.731131, -73.989568], type: 'hotel' },
//   {name: 'Cosmopolitan Hotel', address: '95 W Broadway', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.715681, -74.008922], type: 'hotel' },
