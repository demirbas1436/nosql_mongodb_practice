//---------------------------------------------------------------------------------------------------------------------
// 34.)Write a MongoDB query to find the restaurants that have at least one grade with a score of less than 5
//and that are located in the borough of Manhattan.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { "grades.score": { $lt: 5 }, "borough": "Manhattan" } ).limit(2).pretty()
db.denem2.find( { $and: [ { "grades.score": { $lt: 5 } }, { "borough": "Manhattan" } ] } ).limit(2).pretty()

// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebea7'),
    address: {
      building: '351',
      coord: [ -73.98513559999999, 40.7676919 ],
      street: 'West   57 Street',
      zipcode: '10019'
    },
    borough: 'Manhattan',
    cuisine: 'Irish',
    grades: [
      { date: { '$date': 1409961600000 }, grade: 'A', score: 2 },
      { date: { '$date': 1374451200000 }, grade: 'A', score: 11 },
      { date: { '$date': 1343692800000 }, grade: 'A', score: 12 },
      { date: { '$date': 1325116800000 }, grade: 'A', score: 12 }
    ],
    name: 'Dj Reynolds Pub And Restaurant',
    restaurant_id: '30191841'
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