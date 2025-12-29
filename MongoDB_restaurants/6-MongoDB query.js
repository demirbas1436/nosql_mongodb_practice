//---------------------------------------------------------------------------------------------------------------------
// 6.)Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { "borough": "Bronx" } ).limit(5)


// OUTPUT:
[
  {
    _id: ObjectId('691f1a551914a35d89cebea4'),
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },
    borough: 'Bronx',
    cuisine: 'Bakery',
    grades: [
      { date: { '$date': 1393804800000 }, grade: 'A', score: 2 },
      { date: { '$date': 1378857600000 }, grade: 'A', score: 6 },
      { date: { '$date': 1358985600000 }, grade: 'A', score: 10 },
      { date: { '$date': 1322006400000 }, grade: 'A', score: 9 },
      { date: { '$date': 1299715200000 }, grade: 'B', score: 14 }
    ],
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebea5'),
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },
    borough: 'Bronx',
    cuisine: 'Bakery',
    grades: [
      { date: { '$date': 1393804800000 }, grade: 'A', score: 2 },
      { date: { '$date': 1378857600000 }, grade: 'A', score: 6 },
      { date: { '$date': 1358985600000 }, grade: 'A', score: 10 },
      { date: { '$date': 1322006400000 }, grade: 'A', score: 9 },
      { date: { '$date': 1299715200000 }, grade: 'B', score: 14 }
    ],
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebeaf'),
    address: {
      building: '2300',
      coord: [ -73.8786113, 40.8502883 ],
      street: 'Southern Boulevard',
      zipcode: '10460'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      { date: { '$date': 1401235200000 }, grade: 'A', score: 11 },
      { date: { '$date': 1371600000000 }, grade: 'A', score: 4 },
      { date: { '$date': 1339718400000 }, grade: 'A', score: 3 }
    ],
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebec4'),
    address: {
      building: '1006',
      coord: [ -73.84856870000002, 40.8903781 ],
      street: 'East 233 Street',
      zipcode: '10466'
    },
    borough: 'Bronx',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    grades: [
      { date: { '$date': 1398297600000 }, grade: 'A', score: 10 },
      { date: { '$date': 1378339200000 }, grade: 'A', score: 10 },
      { date: { '$date': 1361404800000 }, grade: 'A', score: 9 },
      { date: { '$date': 1341273600000 }, grade: 'A', score: 11 },
      { date: { '$date': 1310342400000 }, grade: 'A', score: 5 }
    ],
    name: 'Carvel Ice Cream',
    restaurant_id: '40363093'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebec8'),
    address: {
      building: '1236',
      coord: [ -73.8893654, 40.81376179999999 ],
      street: '238 Spofford Ave',
      zipcode: '10474'
    },
    borough: 'Bronx',
    cuisine: 'Chinese',
    grades: [
      { date: { '$date': 1388361600000 }, grade: 'A', score: 8 },
      { date: { '$date': 1357603200000 }, grade: 'A', score: 10 },
      { date: { '$date': 1339459200000 }, grade: 'B', score: 15 }
    ],
    name: 'Happy Garden',
    restaurant_id: '40363289'
  }
]