//---------------------------------------------------------------------------------------------------------------------
// 27.) Write a  MongoDB query to arranged the name of the cuisine in ascending order and for that same cuisine borough
//should be in descending order.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find().sort( { "cuisine": 1, "borough": -1 } ).limit(2).pretty()


// OUTPUT:

[
  {
    _id: ObjectId('691f21c41914a35d89cec6bb'),
    address: {
      building: '34',
      coord: [ -73.9883612, 40.7286391 ],
      street: 'St Marks Place',
      zipcode: '10003'
    },
    borough: 'Manhattan',
    cuisine: 'Afghan',
    grades: [
      { date: { '$date': 1392854400000 }, grade: 'A', score: 12 },
      { date: { '$date': 1375747200000 }, grade: 'B', score: 17 },
      { date: { '$date': 1359590400000 }, grade: 'A', score: 13 },
      { date: { '$date': 1337817600000 }, grade: 'A', score: 10 },
      { date: { '$date': 1323734400000 }, grade: 'A', score: 10 },
      { date: { '$date': 1314230400000 }, grade: 'A', score: 10 }
    ],
    name: 'Khyber Pass',
    restaurant_id: '40589545'
  },
  {
    _id: ObjectId('691f21c41914a35d89cec590'),
    address: {
      building: '1345',
      coord: [ -73.959249, 40.768076 ],
      street: '2 Avenue',
      zipcode: '10021'
    },
    borough: 'Manhattan',
    cuisine: 'Afghan',
    grades: [
      { date: { '$date': 1412640000000 }, grade: 'A', score: 9 },
      { date: { '$date': 1382486400000 }, grade: 'A', score: 8 },
      { date: { '$date': 1351209600000 }, grade: 'A', score: 13 },
      { date: { '$date': 1335398400000 }, grade: 'A', score: 7 },
      { date: { '$date': 1326326400000 }, grade: 'P', score: 10 }
    ],
    name: 'Afghan Kebab House',
    restaurant_id: '40552806'
  }
]

Atlas atlas-h7u0ph-shard-0 [primary] denem> db.denem2.find({},{cuisine:1, _id:0, borough:1}).sort({"cuisine":1, "borough":-1}).pretty()
[
  { borough: 'Manhattan', cuisine: 'Afghan' },
  { borough: 'Manhattan', cuisine: 'Afghan' },
  { borough: 'Manhattan', cuisine: 'Afghan' },
  { borough: 'Manhattan', cuisine: 'Afghan' },
  { borough: 'Queens', cuisine: 'African' },
  { borough: 'Brooklyn', cuisine: 'African' },
  { borough: 'Bronx', cuisine: 'African' },
  { borough: 'Bronx', cuisine: 'African' },
  { borough: 'Staten Island', cuisine: 'American ' },
  { borough: 'Staten Island', cuisine: 'American ' },
  { borough: 'Staten Island', cuisine: 'American ' },
  { borough: 'Staten Island', cuisine: 'American ' },
  { borough: 'Staten Island', cuisine: 'American ' },
  { borough: 'Staten Island', cuisine: 'American ' },
  { borough: 'Staten Island', cuisine: 'American ' },
  { borough: 'Staten Island', cuisine: 'American ' },
  { borough: 'Staten Island', cuisine: 'American ' },
  { borough: 'Staten Island', cuisine: 'American ' },
  { borough: 'Staten Island', cuisine: 'American ' },
  { borough: 'Staten Island', cuisine: 'American ' }
]