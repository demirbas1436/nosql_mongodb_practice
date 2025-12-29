//---------------------------------------------------------------------------------------------------------------------
// 39.)Write a MongoDB query to find the restaurants that have a grade with a score of 2 and a grade with a score of 6
//and are located in the borough of Manhattan.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find({ $and: [{"grades.score": 2},
                        {"grades.score": 6},
                        {"borough": "Manhattan"}]}).limit(2).pretty()
// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebefb'),
    address: {
      building: '567',
      coord: [ -74.00619499999999, 40.735663 ],
      street: 'Hudson Street',
      zipcode: '10014'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      { date: { '$date': 1406505600000 }, grade: 'A', score: 2 },
      { date: { '$date': 1374710400000 }, grade: 'A', score: 7 },
      { date: { '$date': 1360022400000 }, grade: 'A', score: 2 },
      { date: { '$date': 1338249600000 }, grade: 'A', score: 6 },
      { date: { '$date': 1324598400000 }, grade: 'A', score: 5 }
    ],
    name: 'White Horse Tavern',
    restaurant_id: '40364958'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebf07'),
    address: {
      building: '842',
      coord: [ -73.97063700000001, 40.751495 ],
      street: '2 Avenue',
      zipcode: '10017'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      { date: { '$date': 1405987200000 }, grade: 'A', score: 6 },
      { date: { '$date': 1369699200000 }, grade: 'A', score: 2 },
      { date: { '$date': 1338249600000 }, grade: 'A', score: 8 },
      { date: { '$date': 1325721600000 }, grade: 'A', score: 9 },
      { date: { '$date': 1312934400000 }, grade: 'B', score: 24 }
    ],
    name: 'Keats Restaurant',
    restaurant_id: '40365288'
  }
]