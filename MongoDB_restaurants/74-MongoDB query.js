//---------------------------------------------------------------------------------------------------------------------
// 74.)Write a MongoDB query to find the name and address of the restaurants that have a zipcode that starts with '10'.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { "address.zipcode": { $regex: "^10" } },
                { _id: 0, name: 1, address: 1}).limit(2).pretty()

db.denem2.aggregate([
  {$unwind: "$address"},
  {$match: {"address.zipcode": /^10/}},
  {$project: {
      name: 1,
      "address.street": 1,
      "address.zipcode": 1,
      _id: 0}}])


// OUTPUT:

[
  {
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },
    name: 'Morris Park Bake Shop'
  },
  {
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },
    name: 'Morris Park Bake Shop'
  }
]