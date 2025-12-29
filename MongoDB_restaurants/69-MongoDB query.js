//---------------------------------------------------------------------------------------------------------------------
// 69.)Write a MongoDB query to find the name and address of the restaurants that have at least one 'A' grade
//and one 'B' grade.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find({
                  $and: [
                    { "grades.grade": "A" },
                    { "grades.grade": "B" }
                  ]
               },
               { name: 1, address: 1, _id: 0 }).limit(2).pretty()

/*
Atlas atlas-h7u0ph-shard-0 [primary] denem> db.denem2.find({
...   $and: [
...     { "grades.grade": "A" },
...     { "grades.grade": "B" }
...   ]},
...     { name: 1, address: 1, _id: 0, "grades.grade":1 }).limit(2).pretty()
[
  {
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },
    grades: [
      { grade: 'A' },
      { grade: 'A' },
      { grade: 'A' },
      { grade: 'A' },
      { grade: 'B' }
    ],
    name: 'Morris Park Bake Shop'
  },
  {
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },
    grades: [
      { grade: 'A' },
      { grade: 'A' },
      { grade: 'A' },
      { grade: 'A' },
      { grade: 'B' }
    ],
    name: 'Morris Park Bake Shop'
  }
]
*/
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