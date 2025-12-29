//---------------------------------------------------------------------------------------------------------------------
// 9.)Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { grades : { $elemMatch: { "score": { $gt : 80 , $lt :100 } } } }).limit(2).pretty()


// OUTPUT:
[
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
  },
  {
    _id: ObjectId('691f21c41914a35d89cec207'),
    address: {
      building: '130',
      coord: [ -73.984758, 40.7457939 ],
      street: 'Madison Avenue',
      zipcode: '10016'
    },
    borough: 'Manhattan',
    cuisine: 'Pizza/Italian',
    grades: [
      { date: { '$date': 1419379200000 }, grade: 'Z', score: 31 },
      { date: { '$date': 1402963200000 }, grade: 'C', score: 98 },
      { date: { '$date': 1386806400000 }, grade: 'C', score: 32 },
      { date: { '$date': 1369180800000 }, grade: 'B', score: 21 },
      { date: { '$date': 1335916800000 }, grade: 'A', score: 11 }
    ],
    name: 'Bella Napoli',
    restaurant_id: '40393488'
  }
]
