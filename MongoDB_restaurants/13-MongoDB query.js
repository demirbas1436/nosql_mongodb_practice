//---------------------------------------------------------------------------------------------------------------------
// 13.)Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved
//a grade point 'A' not belongs to the borough Brooklyn. The document must be displayed according to the cuisine in descending order.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { "cuisine" : { $ne : "American" },
                  "grades.grade" :"A",
                  "borough": { $ne : "Brooklyn" } } ).sort( { "cuisine": -1 } ).limit(2).pretty()


// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cec66a'),
    address: {
      building: '8278',
      coord: [ -73.88143509999999, 40.7412552 ],
      street: 'Broadway',
      zipcode: '11373'
    },
    borough: 'Queens',
    cuisine: 'Vietnamese/Cambodian/Malaysia',
    grades: [
      { date: { '$date': 1402531200000 }, grade: 'B', score: 21 },
      { date: { '$date': 1369008000000 }, grade: 'A', score: 13 },
      { date: { '$date': 1356480000000 }, grade: 'A', score: 10 },
      { date: { '$date': 1354492800000 }, grade: 'P', score: 5 },
      { date: { '$date': 1336089600000 }, grade: 'B', score: 27 }
    ],
    name: 'Pho Bac Vietnamese Seafood Cuisine',
    restaurant_id: '40578058'
  },
  {
    _id: ObjectId('691f21c41914a35d89cec5b1'),
    address: {
      building: '89',
      coord: [ -73.9995899, 40.7168015 ],
      street: 'Baxter Street',
      zipcode: '10013'
    },
    borough: 'Manhattan',
    cuisine: 'Vietnamese/Cambodian/Malaysia',
    grades: [
      { date: { '$date': 1408579200000 }, grade: 'A', score: 13 },
      { date: { '$date': 1377907200000 }, grade: 'A', score: 13 },
      { date: { '$date': 1365638400000 }, grade: 'C', score: 3 },
      { date: { '$date': 1350432000000 }, grade: 'A', score: 4 },
      { date: { '$date': 1337040000000 }, grade: 'A', score: 10 }
    ],
    name: 'Thai Son',
    restaurant_id: '40559606'
  }
]