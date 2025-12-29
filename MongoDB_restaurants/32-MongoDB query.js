//---------------------------------------------------------------------------------------------------------------------
// 32.)Write a MongoDB query to find the restaurant name, borough, longitude and latitude and cuisine
//for those restaurants which contain 'Mad' as first three letters of its name.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find({ name : { $regex : /^Mad/i, } }, { "name": 1, "borough": 1, "address.coord": 1, "cuisine": 1}).limit(2).pretty()

// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cec3e1'),
    address: { coord: [ -73.9860597, 40.7431194 ] },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Madison Square'
  },
  {
    _id: ObjectId('691f21c41914a35d89cec4af'),
    address: { coord: [ -73.98302199999999, 40.742313 ] },
    borough: 'Manhattan',
    cuisine: 'Indian',
    name: 'Madras Mahal'
  }
]