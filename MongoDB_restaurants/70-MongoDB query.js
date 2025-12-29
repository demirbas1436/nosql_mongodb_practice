//---------------------------------------------------------------------------------------------------------------------
// 70.)Write a MongoDB query to find the name and address of the restaurants that have at least one 'A' grade
//and no 'B' grades.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( {
                  $and: [
                            { "grades.grade": "A" },
                            { "grades.grade": { $not: { $eq: "B" } } }
                        ]
                },
                { name: 1, address: 1, _id: 0 }).limit(2).pretty()
/*
Atlas atlas-h7u0ph-shard-0 [primary] denem> db.denem2.find({
...   $and: [
...         { "grades.grade": "A" },
...         { "grades.grade": { $not: { $eq: "B" } } }
...         ]
...   },
...     { name: 1, address: 1, _id: 0, "grades.grade":1 }).limit(2).pretty()
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
*/

// OUTPUT:

[
  {
    address: {
      building: '351',
      coord: [ -73.98513559999999, 40.7676919 ],
      street: 'West   57 Street',
      zipcode: '10019'
    },
    name: 'Dj Reynolds Pub And Restaurant'
  },
  {
    address: {
      building: '2780',
      coord: [ -73.98241999999999, 40.579505 ],
      street: 'Stillwell Avenue',
      zipcode: '11224'
    },
    name: 'Riviera Caterer'
  }
]