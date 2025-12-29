//---------------------------------------------------------------------------------------------------------------------
// 10.)Write a  MongoDB query to find the restaurants which locate in a latitude value less than -95.754168.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { "address.coord" : { $lt : -95.754168 } }).limit(2).pretty()

// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cec4ed'),
    address: {
      building: '3707',
      coord: [ -101.8945214, 33.5197474 ],
      street: '82 Street',
      zipcode: '11372'
    },
    borough: 'Queens',
    cuisine: 'American ',
    grades: [
      { date: { '$date': 1401840000000 }, grade: 'A', score: 12 },
      { date: { '$date': 1383782400000 }, grade: 'B', score: 19 },
      { date: { '$date': 1368748800000 }, grade: 'A', score: 11 },
      { date: { '$date': 1346198400000 }, grade: 'A', score: 11 },
      { date: { '$date': 1333411200000 }, grade: 'A', score: 12 },
      { date: { '$date': 1321401600000 }, grade: 'A', score: 7 }
    ],
    name: 'Burger King',
    restaurant_id: '40534067'
  },
  {
    _id: ObjectId('691f21c41914a35d89cec858'),
    address: {
      building: '15259',
      coord: [ -119.6368672, 36.2504996 ],
      street: '10 Avenue',
      zipcode: '11357'
    },
    borough: 'Queens',
    cuisine: 'Italian',
    grades: [
      { date: { '$date': 1409788800000 }, grade: 'A', score: 11 },
      { date: { '$date': 1395792000000 }, grade: 'A', score: 8 },
      { date: { '$date': 1362355200000 }, grade: 'A', score: 10 },
      { date: { '$date': 1348704000000 }, grade: 'A', score: 10 },
      { date: { '$date': 1334880000000 }, grade: 'A', score: 7 },
      { date: { '$date': 1322006400000 }, grade: 'C', score: 34 }
    ],
    name: "Cascarino'S",
    restaurant_id: '40668681'
  }
]