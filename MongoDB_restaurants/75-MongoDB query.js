//---------------------------------------------------------------------------------------------------------------------
// 75.)Write a MongoDB query to find the name and address of the restaurants that have a cuisine
//that starts with the letter 'B'.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { cuisine: { $regex: /^B/ } }, { "name": 1, "address": 1, "cuisine" : 1, "_id": 0 } ).limit(2).pretty()



// OUTPUT:

[
  {
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop'
  },
  {
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop'
  }
]