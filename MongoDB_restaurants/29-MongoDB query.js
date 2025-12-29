//---------------------------------------------------------------------------------------------------------------------
// 29.) Write a  MongoDB query which will select all documents in the restaurants collection where the coord field
//value is double.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { "address.coord": { $type:1 } } ).limit(2).pretty() //-> double ones
db.denem2.find( { "address.coord": { $not: { $type:1 } } } ).limit(2).pretty() //->non-double ones
//---------------------------------------------------------------------------------------------------------------------
/*
    In MongoDB, the {$type: <number>} expression is used to check the BSON data type of a field. In other words, the
query filters for the specified type of data in the field.
Here are some common type codes:
    1 → double
    2 → string
    3 → object
    4 → array
    7 → ObjectId
    8 → boolean
    9 → date
    16 → int32
    18 → int64
*/

// OUTPUT:
[
  {
    _id: ObjectId('691f1a551914a35d89cebea4'),
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },
    borough: 'Bronx',
    cuisine: 'Bakery',
    grades: [
      { date: { '$date': 1393804800000 }, grade: 'A', score: 2 },
      { date: { '$date': 1378857600000 }, grade: 'A', score: 6 },
      { date: { '$date': 1358985600000 }, grade: 'A', score: 10 },
      { date: { '$date': 1322006400000 }, grade: 'A', score: 9 },
      { date: { '$date': 1299715200000 }, grade: 'B', score: 14 }
    ],
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebea5'),
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },
    borough: 'Bronx',
    cuisine: 'Bakery',
    grades: [
      { date: { '$date': 1393804800000 }, grade: 'A', score: 2 },
      { date: { '$date': 1378857600000 }, grade: 'A', score: 6 },
      { date: { '$date': 1358985600000 }, grade: 'A', score: 10 },
      { date: { '$date': 1322006400000 }, grade: 'A', score: 9 },
      { date: { '$date': 1299715200000 }, grade: 'B', score: 14 }
    ],
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  }
]