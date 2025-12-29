//---------------------------------------------------------------------------------------------------------------------
// 7.)Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { "borough": "Bronx" } ).skip(5).limit(5)


// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebeda'),
    address: {
      building: '277',
      coord: [ -73.8941893, 40.8634684 ],
      street: 'East Kingsbridge Road',
      zipcode: '10458'
    },
    borough: 'Bronx',
    cuisine: 'Chinese',
    grades: [
      { date: { '$date': 1393804800000 }, grade: 'A', score: 10 },
      { date: { '$date': 1380153600000 }, grade: 'A', score: 10 },
      { date: { '$date': 1363651200000 }, grade: 'A', score: 10 },
      { date: { '$date': 1346198400000 }, grade: 'A', score: 11 },
      { date: { '$date': 1313539200000 }, grade: 'A', score: 13 }
    ],
    name: 'Happy Garden',
    restaurant_id: '40364296'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebee2'),
    address: {
      building: '658',
      coord: [ -73.81363999999999, 40.82941100000001 ],
      street: 'Clarence Ave',
      zipcode: '10465'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      { date: { '$date': 1403308800000 }, grade: 'A', score: 5 },
      { date: { '$date': 1341964800000 }, grade: 'A', score: 10 }
    ],
    name: 'Manhem Club',
    restaurant_id: '40364363'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebefa'),
    address: {
      building: '2222',
      coord: [ -73.84971759999999, 40.8304811 ],
      street: 'Haviland Avenue',
      zipcode: '10462'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      { date: { '$date': 1418860800000 }, grade: 'A', score: 7 },
      { date: { '$date': 1398902400000 }, grade: 'B', score: 17 },
      { date: { '$date': 1363219200000 }, grade: 'A', score: 12 },
      { date: { '$date': 1348099200000 }, grade: 'A', score: 9 },
      { date: { '$date': 1328659200000 }, grade: 'B', score: 19 }
    ],
    name: 'The New Starling Athletic Club Of The Bronx',
    restaurant_id: '40364956'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebf12'),
    address: {
      building: '72',
      coord: [ -73.92506, 40.8275556 ],
      street: 'East  161 Street',
      zipcode: '10451'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      { date: { '$date': 1397520000000 }, grade: 'A', score: 9 },
      { date: { '$date': 1384387200000 }, grade: 'A', score: 4 },
      { date: { '$date': 1375056000000 }, grade: 'A', score: 10 },
      { date: { '$date': 1356912000000 }, grade: 'B', score: 15 },
      { date: { '$date': 1338336000000 }, grade: 'A', score: 13 },
      { date: { '$date': 1326067200000 }, grade: 'A', score: 10 },
      { date: { '$date': 1313366400000 }, grade: 'C', score: 37 }
    ],
    name: 'Yankee Tavern',
    restaurant_id: '40365499'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebf25'),
    address: {
      building: '331',
      coord: [ -73.87786539999999, 40.8724377 ],
      street: 'East  204 Street',
      zipcode: '10467'
    },
    borough: 'Bronx',
    cuisine: 'Irish',
    grades: [
      { date: { '$date': 1409011200000 }, grade: 'A', score: 10 },
      { date: { '$date': 1395792000000 }, grade: 'B', score: 23 },
      { date: { '$date': 1378857600000 }, grade: 'A', score: 13 },
      { date: { '$date': 1355788800000 }, grade: 'B', score: 27 },
      { date: { '$date': 1319068800000 }, grade: 'A', score: 13 }
    ],
    name: 'Mcdwyers Pub',
    restaurant_id: '40365893'
  }
]
