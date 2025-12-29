//---------------------------------------------------------------------------------------------------------------------
// 83.) Write a MongoDB query to find all the Chinese restaurants in Brooklyn.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { borough: "Brooklyn", cuisine: "Chinese" } ).limit(2).pretty()


// OUTPUT:

[
  {
    _id: ObjectId('691f21c41914a35d89cebeb1'),
    address: {
      building: '1269',
      coord: [ -73.871194, 40.6730975 ],
      street: 'Sutter Avenue',
      zipcode: '11208'
    },
    borough: 'Brooklyn',
    cuisine: 'Chinese',
    grades: [
      { date: { '$date': 1410825600000 }, grade: 'B', score: 21 },
      { date: { '$date': 1377648000000 }, grade: 'A', score: 7 },
      { date: { '$date': 1364860800000 }, grade: 'C', score: 56 },
      { date: { '$date': 1344988800000 }, grade: 'B', score: 27 },
      { date: { '$date': 1332892800000 }, grade: 'B', score: 27 }
    ],
    name: 'May May Kitchen',
    restaurant_id: '40358429'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebed4'),
    address: {
      building: '976',
      coord: [ -73.92701509999999, 40.6620192 ],
      street: 'Rutland Road',
      zipcode: '11212'
    },
    borough: 'Brooklyn',
    cuisine: 'Chinese',
    grades: [
      { date: { '$date': 1398211200000 }, grade: 'A', score: 13 },
      { date: { '$date': 1364256000000 }, grade: 'A', score: 10 },
      { date: { '$date': 1331596800000 }, grade: 'A', score: 4 },
      { date: { '$date': 1321401600000 }, grade: 'A', score: 13 }
    ],
    name: 'Golden Pavillion',
    restaurant_id: '40363920'
  }
]