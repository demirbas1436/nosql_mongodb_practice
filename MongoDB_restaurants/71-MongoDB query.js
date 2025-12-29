//---------------------------------------------------------------------------------------------------------------------
// 71.)Write a MongoDB query to find the name ,address and grades of the restaurants that have at least one 'A' grade
//and no 'C' grades.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { "grades.grade": "A", "grades.grade": { $not: { $eq: "C" } } },
                { name: 1, address: 1, _id: 0, "grades.grade": 1, _id: 0 } ).limit(2).pretty()

// OUTPUT:

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