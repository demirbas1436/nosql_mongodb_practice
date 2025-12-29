//---------------------------------------------------------------------------------------------------------------------
// 25.) Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find().sort( { "name": 1 } ).limit(2).pretty()


// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cecb35'),
    address: {
      building: '129',
      coord: [ -73.962943, 40.685007 ],
      street: 'Gates Avenue',
      zipcode: '11238'
    },
    borough: 'Brooklyn',
    cuisine: 'Italian',
    grades: [
      { date: { '$date': 1394064000000 }, grade: 'A', score: 5 },
      { date: { '$date': 1377734400000 }, grade: 'A', score: 2 },
      { date: { '$date': 1362700800000 }, grade: 'A', score: 7 },
      { date: { '$date': 1340755200000 }, grade: 'A', score: 7 },
      { date: { '$date': 1321488000000 }, grade: 'A', score: 12 }
    ],
    name: '(Lewis Drug Store) Locanda Vini E Olii',
    restaurant_id: '40804423'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebeb2'),
    address: {
      building: '1',
      coord: [ -73.96926909999999, 40.7685235 ],
      street: 'East   66 Street',
      zipcode: '10065'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      { date: { '$date': 1399420800000 }, grade: 'A', score: 3 },
      { date: { '$date': 1367539200000 }, grade: 'A', score: 4 },
      { date: { '$date': 1335744000000 }, grade: 'A', score: 6 },
      { date: { '$date': 1324944000000 }, grade: 'A', score: 0 }
    ],
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
  }
]

Atlas atlas-h7u0ph-shard-0 [primary] denem> db.denem2.find({},{_id:0, name:1}).sort({"name":1}).pretty()
[
  { name: '(Lewis Drug Store) Locanda Vini E Olii' },
  { name: '1 East 66Th Street Kitchen' },
  { name: '101 Deli' },
  { name: '101 Restaurant And Bar' },
  { name: '1020 Bar' },
  { name: '104-01 Foster Avenue Coffee Shop(Ups)' },
  { name: '10Th Avenue Pizza & Cafe' },
  { name: '111 Restaurant' },
  { name: '15 East Restaurant' },
  { name: '200 Fifth Avenue Restaurant & Sports Bar' },
  { name: '21 Club' },
  { name: '2A' },
  { name: '3 Deli & Grill' },
  { name: '3 Guys' },
  { name: '3 Guys Resturant' },
  { name: '42Nd Street Pizza Diner' },
  { name: "44 & X Hell'S Kitchen" },
  { name: '44 Sw Ristorante & Bar' },
  { name: '5 Burro Cafe' },
  { name: '525 Lex Restaurant & Bar' }
]