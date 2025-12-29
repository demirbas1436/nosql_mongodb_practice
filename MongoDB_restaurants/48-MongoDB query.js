//---------------------------------------------------------------------------------------------------------------------
// 48.)Write a MongoDB query to find the restaurants that have all grades with a score greater than 5.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { grades: { $elemMatch: { score: { $gt: 5 } } } } ).limit(2).pretty()
db.denem2.find( { "grades.score": { $gt: 5 } } ).limit(2).pretty()
db.denem2.find({
                  grades: {
                    $not: {
                      $elemMatch: {score: {$lte: 5}}
                    }
                  }
                }).limit(2).pretty()

/*
------------------------------------------------------------------------------------------------------------------------
Query	                                        |   What does it look for?	       |            Logic
------------------------------------------------|----------------------------------|------------------------------------
{ $elemMatch: { score: { $gt: 5 } } }	        |   At least one score > 5	       |            NORMAL
{ "grades.score": { $gt: 5 } }	                |   At least one score > 5	       |            NORMAL
{ $not: { $elemMatch: { score: { $lte: 5 } } } }|	No score ≤ 5 at all	           |   COMPLETELY OPPOSITE DIFFERENT
------------------------------------------------------------------------------------------------------------------------
*/

// OUTPUT:
//query 1-2

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
  }
]


//query 3
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
    _id: ObjectId('691f21c41914a35d89cebea9'),
    address: {
      building: '97-22',
      coord: [ -73.8601152, 40.7311739 ],
      street: '63 Road',
      zipcode: '11374'
    },
    borough: 'Queens',
    cuisine: 'Jewish/Kosher',
    grades: [
      { date: { '$date': 1416787200000 }, grade: 'Z', score: 20 },
      { date: { '$date': 1358380800000 }, grade: 'A', score: 13 },
      { date: { '$date': 1343865600000 }, grade: 'A', score: 13 },
      { date: { '$date': 1323907200000 }, grade: 'B', score: 25 }
    ],
    name: 'Tov Kosher Kitchen',
    restaurant_id: '40356068'
  }
]