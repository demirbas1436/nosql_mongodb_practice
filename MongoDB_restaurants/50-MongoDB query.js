//---------------------------------------------------------------------------------------------------------------------
// 50.)Write a MongoDB query to find the restaurants that have all grades with a score greater than 5 and are located
//in the borough of Manhattan or Brooklyn.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find({
                  borough: {
                    $in: ["Manhattan", "Brooklyn"]
                  },
                  grades: {
                    $not: {
                      $elemMatch: { score: { $lte: 5 } }
                    }
                  }
              }).limit(2).pretty()

// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebea6'),
    address: {
      building: '469',
      coord: [ -73.961704, 40.662942 ],
      street: 'Flatbush Avenue',
      zipcode: '11225'
    },
    borough: 'Brooklyn',
    cuisine: 'Hamburgers',
    grades: [
      { date: { '$date': 1419897600000 }, grade: 'A', score: 8 },
      { date: { '$date': 1404172800000 }, grade: 'B', score: 23 },
      { date: { '$date': 1367280000000 }, grade: 'A', score: 12 },
      { date: { '$date': 1336435200000 }, grade: 'A', score: 12 }
    ],
    name: "Wendy'S",
    restaurant_id: '30112340'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebeac'),
    address: {
      building: '7114',
      coord: [ -73.9068506, 40.6199034 ],
      street: 'Avenue U',
      zipcode: '11234'
    },
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    grades: [
      { date: { '$date': 1401321600000 }, grade: 'A', score: 10 },
      { date: { '$date': 1389657600000 }, grade: 'A', score: 10 },
      { date: { '$date': 1375488000000 }, grade: 'A', score: 8 },
      { date: { '$date': 1342569600000 }, grade: 'A', score: 10 },
      { date: { '$date': 1331251200000 }, grade: 'A', score: 13 },
      { date: { '$date': 1318550400000 }, grade: 'A', score: 9 }
    ],
    name: "Wilken'S Fine Food",
    restaurant_id: '40356483'
  }
]