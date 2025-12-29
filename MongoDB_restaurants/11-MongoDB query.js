//---------------------------------------------------------------------------------------------------------------------
// 11.)Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and their grade
//score more than 70 and latitude less than -65.754168.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { $and:[{ "cuisine" : { $ne :"American " } },
                             { "grades.score" : { $gt : 70 } },
                             { "address.coord" : { $lt : -65.754168 } }]}).limit(2).pretty()


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