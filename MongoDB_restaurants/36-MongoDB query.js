//---------------------------------------------------------------------------------------------------------------------
// 36.)Write a MongoDB query to find the restaurants that have at least one grade with a score of less than 5
//and that are located in the borough of Manhattan or Brooklyn, and their cuisine is not American.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { $and: [
                            { $or: [{ borough: "Manhattan" }, { borough: "Brooklyn" }] },
                            { "grades.score": { $lt: 5 } },
                            { cuisine: { $ne: "American" } }]}).limit(2).pretty()

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
    _id: ObjectId('691f21c41914a35d89cebead'),
    address: {
      building: '6409',
      coord: [ -74.00528899999999, 40.628886 ],
      street: '11 Avenue',
      zipcode: '11219'
    },
    borough: 'Brooklyn',
    cuisine: 'American ',
    grades: [
      { date: { '$date': 1405641600000 }, grade: 'A', score: 12 },
      { date: { '$date': 1375142400000 }, grade: 'A', score: 12 },
      { date: { '$date': 1360713600000 }, grade: 'A', score: 11 },
      { date: { '$date': 1345075200000 }, grade: 'A', score: 2 },
      { date: { '$date': 1313539200000 }, grade: 'A', score: 11 }
    ],
    name: 'Regina Caterers',
    restaurant_id: '40356649'
  }
]