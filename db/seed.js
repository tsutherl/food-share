const db = require('APP/db')

const seedFoodProviders = () => db.Promise.map([
  {name: 'Bouley', address: '75 Wall St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.705137, -74.013940], type: 'restaurant'},
  {name: 'Marc Forgione', address: '134 Reade St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.716526, -74.009567], type: 'restaurant'},
  {name: 'Tamarind', address: '99 Hudson St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.718977, -74.008929], type: 'restaurant'},
  {name: 'Hop Lee Restaurant', address: '16 Mott St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.714230, -73.998509], type: 'restaurant'},
  {name: 'Jungsik', address: '2 Harrison St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.718679, -74.008900], type: 'restaurant'},
  {name: 'The Capital Grille', address: '120 Broadway', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.708475, -74.010846], type: 'restaurant'},
  {name: 'Pylos', address: '128 E 7th St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.726096, -73.984152], type: 'restaurant'},
  {name: 'Joes Shanghai', address: '9 Pell St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.714601, -73.997761], type: 'restaurant'},
  {name: 'Cafe Katja', address: '79 Orchard St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.717719, -73.990565], type: 'restaurant'},
  {name: 'Rosanjin', address: '141 Duane St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.716403, -74.007724], type: 'restaurant'},
  {name: 'Kittichai', address: '60 Thompson St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.724014, -74.003242], type: 'restaurant'},
  {name: 'Bianca Restaurant', address: '5 Bleecker St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.725495, -73.992662], type: 'restaurant'},
  {name: 'Rayuela', address: '165 Allen St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.721266, -73.989756], type: 'restaurant'},
  {name: 'Mas Farmhouse', address: '39 Downing St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.729269, -74.003875], type: 'restaurant'},
  {name: 'Xe Lua', address: '86 Mulberry St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.716544, -73.998626], type: 'restaurant'},
  {name: 'Andaz Wall Street', address: '75 Wall St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.705137, -74.007624], type: 'hotel' },
  {name: 'Hotel Mulberry', address: '52 Mulberry St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.715317, -73.999542], type: 'hotel' },
  {name: 'The Ritz-Carlton New York, Battery Park', address: 'Two West Street', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.705417, -74.017241], type: 'hotel' },
  {name: 'Wall Street Inn', address: '9 S William St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.704581, -74.010273], type: 'hotel' },
  {name: 'Smyth TriBeCa', address: '85 West Broadway', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.715076, -74.009301], type: 'hotel' },
  {name: 'Double Tree', address: '8 Stone St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.703961, -74.012350], type: 'hotel' },
  {name: 'Hotel 91', address: '91 E Broadway', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.713427, -73.993624], type: 'hotel' },
  {name: 'Conrad New York Hotel', address: '102 N End Ave', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.714985, -74.015841], type: 'hotel' },
  {name: 'Millenium Hilton Hotel', address: '55 Church St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.711597, -74.010392], type: 'hotel' },
  {name: 'US Pacific Hotel', address: '106 Bowery', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.717873, -73.995231], type: 'hotel' },
  {name: 'Gild Hall, a Thompson Hotel', address: '15 Gold Street', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.707894, -74.007108], type: 'hotel' },
  {name: 'W New York', address: '123 Washington Street', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.709102, -74.013997], type: 'hotel' },
  {name: 'New York Marriott Downtown', address: '85 W St at Albany St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.731131, -73.989568], type: 'hotel' },
  {name: 'Cosmopolitan Hotel', address: '95 W Broadway', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.715681, -74.008922], type: 'hotel' },
  {name: 'Club Quarters', address: '140 Washington St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.709630, -74.013940], type: 'hotel' }
  ], foodProvider => db.model('foodProviders').create(foodProviders));
//const foodProviders = db.define('foodProviders', {

// const seedUsers = () => db.Promise.map([
//   {name: 'So Many', email: 'god@example.com', password: '1234'},
//   {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
//   {name: 'Lamont George', email: 'monty@george.com', password: '1234'},
//   {name: 'Hyacinth Mary', email: 'hyacinth@mary.com', password: '1234'},
//   {name: 'Bob Henry', email: 'bob@henry.com', password: '1234'},
//   {name: 'Chicken George', email: 'chicken@popeyes.com', password: '1234'},
//   {name: 'Spongebob Squarepants', email: 'bikini@bottom.com', password: '1234'},
//   {name: 'Squidward Henry', email: 'clarinet@society.com', password: '1234'},
//   {name: 'Cara Weber', email: 'cara@gmail.com', password: '1234'},
//   {name: 'Ashi Krishnan', email: 'ashi@ashi.com', password: '1234'}
// ], user => db.model('users').create(user))
// //const User = db.define('users', {

// const seedOfferings = () => db.Promise.map([
//   {name: 'Save a Puppy', category: 'Animal Health and Happiness', price: '17.39', picture: 'https://ih1.redbubble.net/image.60977294.4128/sticker,375x360.u1.png',
//     wish: 'Each year, millions of dogs, cats, and other animals end up in shelters in the US.  The lucky ones get adopted quickly, but many more remain in shelter care for months or years; millions are also euthanized each year. Your purchase of the "Save a Puppy" swish makes a donation to an animal care shelter where volunteers keep animals healthy and give them as much love and care as possible in an often overcrowded environment.'},
//   {name: 'Rainforest', category: 'Enviornment', price: '12.99', picture: 'http://www.unixstickers.com/image/data/stickers/bower/Bower.sh.png',
//     wish: 'Rainforests form a crucial aspect of the planetary carbon cycle, as well as providing environments for species that can be found nowhere else on the planet.  The ongoing destruction of rainforests for agriculture and other kinds of development jeopardizes the future of all living things. Your purchase of the "Rainforest" swish makes a donation to environmental groups working through scientific and political channels to preserve these regions of astonishing biodiversity.'},
//   {name: 'Day of the Dead', category: 'Mexican', price: '39.74', picture: 'https://ih1.redbubble.net/image.120480953.2435/sticker,375x360.png',
//     wish: 'Immigration is never an easy experience, and contemporary Mexican immigrants to the US find themselves in an especially difficult position as the targets of callous political rhetoric and uninformed prejudice.  Symbol of the holiday when Mexicans remember and celebrate their ancestors, the "Day of the Dead" swish honors familial connections and intercultural exchange.  Your purchase of this swish makes a donation to a group working on some of the issues which affect a significant portion of Mexican immigrants, like immigration policy reform, access to legal representation for immigrants and their families, and campaigns for agricultural labor rights.'},
//   {name: 'Pizza for the Homeless', category: 'Food', price: '2.99', picture: 'http://d6ce0no7ktiq.cloudfront.net/images/preview/2015/10/05/design-5762/template-sticker-600x600.png',
//     wish: 'It is frankly appalling that in a city as wealthy as NYC, tens of thousands of people are homeless.  Your purchase of the "Pizza for the Homeless" swish makes a donation to an NYC organization seeking to meet their needs for food, shelter, medical care, and vocational training.'},
//   {name: 'Git', category: 'Technology', price: '139.74', picture: 'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/1488/medium/1402940451/git-icon-stickers.png',
//     wish: 'Support software access for all!  Your purchase of the "Git" swish makes a donation to an open-source, free, or otherwise publically-available technology project.'},
//   {name: 'Hurricane Relief', category: 'Enviornment', price: '50.00', picture: 'http://www.unixstickers.com/image/data/stickers/debian/debian_shaped.sh.png',
//     wish: 'Hurricanes hurt.  Your purchase of the "Hurricane Relief" swish donates to the Red Cross or other relief agency to enable the work of volunteers and first responders helping hurricane victims to put their lives back together again'},
//   {name: 'Stop People from Smoking!!!', category: 'Health', price: '27.37', picture: 'http://images.mydoorsign.com/img/lg/S/no-smoking-modular-door-sign-s-9696.png',
//     wish: 'Hate lung / throat / mouth cancer?  Buy this swish to contribute to anti-smoking campaigns with a special focus on the prevention of smoking among adolescents.'},
//   {name: 'Help the Single Stop being Single', category: 'Mental Health', price: '37.00', picture: 'http://www.bumperstickerz.com/images/1000345-04-00-00-00_lg.png',
//     wish: 'Being single can be great, except for those who really don not want to be single!  Purchase of this swish makes a donation to community-based organizations that promote social interaction to build friendships and maybe something more ... '},
//   {name: 'Keep Mother Earth Clean', category: 'Enviornment', price: '16.37', picture: 'https://www.peaceproject.com/sites/default/files/imagecache/700wide-500-high/LS190-Peace-Dove-Bumper-Sticker.png',
//     wish: 'Despite what you might glean from the current US presidential election coverage, pollution is a huge threat to the human way of life in the US and beyond.  Protestors in Standing Rock are risking their lives to protect a vital fresh water source from the inevitability of pipeline spills.  Concerned citizens across the country are pushing back against top-down local laws that give multinational conglomerates the right to confiscate private land for fracking.  Your purchase of this swish contributes to these legal and political efforts.'},
//   {name: 'Help Cancer Patients Celebrate Their Birthday', category: 'Health', price: '47.57', picture: 'https://ih1.redbubble.net/image.120563886.3008/sticker,375x360.u3.png',
//     wish: 'Many organizations staffed by volunteers work to improve quality of life for those suffering from severe illness like cancer.  Purchase of this swish contributes to their efforts.'},
// ], offering => db.model('offering').create(offering));

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedFoodProviders)
  .then(foodProviders => console.log(`Seeded ${foodProviders.length} users OK`))
  .then(seedOfferings)
  .then(offerings => console.log(`Seeded ${offerings.length} stickers OK`))
  .catch(error => console.error(error))
  .finally(() => db.close());
