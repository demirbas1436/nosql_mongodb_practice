//---------------------------------------------------------------------------------------------------------------------
// 49.) Write a MongoDB query to find the restaurants that have all grades with a score greater than 5 and are located
//in the borough of Manhattan.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find({
                  borough: "Manhattan",
                  grades: {
                    $not: {
                      $elemMatch: {score: {$lte: 5}}
                    }
                  }
               }).limit(2).pretty()

// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebeb7'),
    address: {
      building: '522',
      coord: [ -73.95171, 40.767461 ],
      street: 'East   74 Street',
      zipcode: '10021'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      { date: { '$date': 1409616000000 }, grade: 'A', score: 12 },
      { date: { '$date': 1387411200000 }, grade: 'B', score: 16 },
      { date: { '$date': 1369699200000 }, grade: 'A', score: 9 },
      { date: { '$date': 1354838400000 }, grade: 'A', score: 13 },
      { date: { '$date': 1332979200000 }, grade: 'A', score: 11 }
    ],
    name: 'Glorious Food',
    restaurant_id: '40361521'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebeba'),
    address: {
      building: '759',
      coord: [ -73.9925306, 40.7309346 ],
      street: 'Broadway',
      zipcode: '10003'
    },
    borough: 'Manhattan',
    cuisine: 'Delicatessen',
    grades: [
      { date: { '$date': 1390262400000 }, grade: 'A', score: 12 },
      { date: { '$date': 1357257600000 }, grade: 'A', score: 11 },
      { date: { '$date': 1339027200000 }, grade: 'A', score: 6 },
      { date: { '$date': 1326758400000 }, grade: 'A', score: 8 }
    ],
    name: "Bully'S Deli",
    restaurant_id: '40361708'
  }
]