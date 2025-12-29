//---------------------------------------------------------------------------------------------------------------------
// 72.)Write a  MongoDB query to find the name, address, and grades of the restaurants that have at least one 'A' grade,
//no 'B' grades, and no 'C' grades.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find({
                  $and: [
                            { "grades.grade": "A" },
                            { "grades.grade": { $not: { $eq: "B" } } },
                            { "grades.grade": { $not: { $eq: "C" } } }
                  ]
               },
               { name: 1, address: 1, "grades.grade":1, _id: 0 }).limit(2).pretty()


// OUTPUT:

[
  {
    address: {
      building: '351',
      coord: [ -73.98513559999999, 40.7676919 ],
      street: 'West   57 Street',
      zipcode: '10019'
    },
    grades: [ { grade: 'A' }, { grade: 'A' }, { grade: 'A' }, { grade: 'A' } ],
    name: 'Dj Reynolds Pub And Restaurant'
  },
  {
    address: {
      building: '2780',
      coord: [ -73.98241999999999, 40.579505 ],
      street: 'Stillwell Avenue',
      zipcode: '11224'
    },
    grades: [ { grade: 'A' }, { grade: 'A' }, { grade: 'A' }, { grade: 'A' } ],
    name: 'Riviera Caterer'
  }
]