//---------------------------------------------------------------------------------------------------------------------
// 26.) Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find().sort( { "name": -1 } ).limit(2).pretty()



// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebf64'),
    address: {
      building: '6946',
      coord: [ -73.8811834, 40.7017759 ],
      street: 'Myrtle Avenue',
      zipcode: '11385'
    },
    borough: 'Queens',
    cuisine: 'German',
    grades: [
      { date: { '$date': 1411516800000 }, grade: 'A', score: 11 },
      { date: { '$date': 1397692800000 }, grade: 'A', score: 7 },
      { date: { '$date': 1363046400000 }, grade: 'A', score: 13 },
      { date: { '$date': 1349136000000 }, grade: 'A', score: 9 },
      { date: { '$date': 1336521600000 }, grade: 'A', score: 13 },
      { date: { '$date': 1325030400000 }, grade: 'B', score: 24 }
    ],
    name: 'Zum Stammtisch',
    restaurant_id: '40367377'
  },
  {
    _id: ObjectId('691f21c41914a35d89ceca9e'),
    address: {
      building: '107109',
      coord: [ -73.9744668, 40.731155 ],
      street: 'Avenue C',
      zipcode: '10009'
    },
    borough: 'Manhattan',
    cuisine: 'German',
    grades: [
      { date: { '$date': 1393891200000 }, grade: 'A', score: 7 },
      { date: { '$date': 1377043200000 }, grade: 'A', score: 13 },
      { date: { '$date': 1361923200000 }, grade: 'A', score: 11 },
      { date: { '$date': 1338854400000 }, grade: 'A', score: 12 },
      { date: { '$date': 1324339200000 }, grade: 'A', score: 9 },
      { date: { '$date': 1310688000000 }, grade: 'A', score: 6 }
    ],
    name: 'Zum Schneider',
    restaurant_id: '40763382'
  }
]



Atlas atlas-h7u0ph-shard-0 [primary] denem> db.denem2.find({},{_id:0, name:1}).sort({"name":-1}).pretty()
[
  { name: 'Zum Stammtisch' },
  { name: 'Zum Schneider' },
  { name: "Zorba'S" },
  { name: 'Zebu Grill' },
  { name: "Zaro'S Bread Basket" },
  { name: "Zaro'S Bread Basket" },
  { name: "Zaro'S Bread Basket" },
  { name: "Zaro'S Bread Basket" },
  { name: "Zaro'S Bread Basket" },
  { name: "Zaro'S Bakery" },
  { name: "Zaro'S Bakery" },
  { name: "Zafi'S Luncheonette" },
  { name: 'Yvonne Yvonne Restaurant' },
  { name: 'Yura & Company On Madison' },
  { name: 'Yummy Kitchen' },
  { name: 'Your Bakery' },
  { name: 'Yonah Shimmels Knishes' },
  { name: 'Yolanda Pizzeria Restaurant' },
  { name: "Yip'S" },
  { name: 'Yen Yen Restaurant' }
]