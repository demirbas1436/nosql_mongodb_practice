//---------------------------------------------------------------------------------------------------------------------
// 41.) Write a MongoDB query to find the restaurants that have a grade with a score of 2 and a grade with a score of 6
//and are located in the borough of Manhattan or Brooklyn, and their cuisine is not American.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find({
  $and: [
    { "borough": { "$in": ["Manhattan", "Brooklyn"] }},
    { "grades": {
        $elemMatch: { "score": 2 }
      }
    },
    { "grades": {
        $elemMatch: { "score": 6 }
      }
    },
    {"cuisine": {$ne:"American"}}
  ]
}).limit(2).pretty()


db.denem2.find({
    $and: [
        {borough: {$in: ["Manhattan", "Brooklyn"]}},
        {"grades.score": {$all: [2, 6]}}, //-> It retrieves the documents that contain both the values 2 and 6
        {cuisine: {$ne: "American"}}
    ]
}).limit(2).pretty()

/*
The $all operator in MongoDB is used to check whether all the specified elements exist within an array field.
In other words, when $all is used, all of the given values must be present in the array. This is useful for verifying
whether an array contains all the specified elements.
*/

// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebee5'),
    address: {
      building: '261',
      coord: [ -73.94839189999999, 40.7224876 ],
      street: 'Driggs Avenue',
      zipcode: '11222'
    },
    borough: 'Brooklyn',
    cuisine: 'Polish',
    grades: [ //-> there are both two and six
      { date: { '$date': 1401494400000 }, grade: 'A', score: 2 },
      { date: { '$date': 1368144000000 }, grade: 'A', score: 3 },
      { date: { '$date': 1329436800000 }, grade: 'A', score: 6 },
      { date: { '$date': 1318550400000 }, grade: 'C', score: 54 }
    ],
    name: 'Polish National Home',
    restaurant_id: '40364404'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebefb'),
    address: { //-> there are both two and six
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
  }
]