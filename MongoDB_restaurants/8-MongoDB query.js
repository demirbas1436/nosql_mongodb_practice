//---------------------------------------------------------------------------------------------------------------------
// 8.)Write a MongoDB query to find the restaurants who achieved a score more than 90.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { grades : { $elemMatch: {"score": {$gt : 90 } } } }) //-> bir elemanın gelmesi yeterli

db.denem2.find({ grades: { $not: { $elemMatch: { score: { $lte: 90 } } } } }) //-> tüm elemanların koşulu sağlaması


// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cec003'),
    address: {
      building: '65',
      coord: [ -73.9782725, 40.7624022 ],
      street: 'West   54 Street',
      zipcode: '10019'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      { date: { '$date': 1408665600000 }, grade: 'A', score: 11 },
      { date: { '$date': 1395964800000 }, grade: 'C', score: 131 },
      { date: { '$date': 1380067200000 }, grade: 'A', score: 11 },
      { date: { '$date': 1365379200000 }, grade: 'B', score: 25 },
      { date: { '$date': 1350259200000 }, grade: 'A', score: 11 },
      { date: { '$date': 1318982400000 }, grade: 'A', score: 13 }
    ],
    name: "Murals On 54/Randolphs'S",
    restaurant_id: '40372466'
  },
  {
    _id: ObjectId('691f21c41914a35d89cec0a4'),
    address: {
      building: '345',
      coord: [ -73.9864626, 40.7266739 ],
      street: 'East 6 Street',
      zipcode: '10003'
    },
    borough: 'Manhattan',
    cuisine: 'Indian',
    grades: [
      { date: { '$date': 1410739200000 }, grade: 'A', score: 5 },
      { date: { '$date': 1389657600000 }, grade: 'A', score: 8 },
      { date: { '$date': 1369872000000 }, grade: 'A', score: 12 },
      { date: { '$date': 1366761600000 }, grade: 'P', score: 2 },
      { date: { '$date': 1349049600000 }, grade: 'A', score: 9 },
      { date: { '$date': 1333670400000 }, grade: 'C', score: 92 },
      { date: { '$date': 1320278400000 }, grade: 'C', score: 41 }
    ],
    name: 'Gandhi',
    restaurant_id: '40381295'
  }
]