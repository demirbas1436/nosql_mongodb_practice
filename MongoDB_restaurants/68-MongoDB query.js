//---------------------------------------------------------------------------------------------------------------------
// 68.)Write a MongoDB query to find the name and address of the restaurants that received
//a grade of 'B' or 'C' on a specific date.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( {
                 grades: {
                     $elemMatch: {
                         "date.$date": 1378857600000,
                         grade: { $in: ["B", "C"] }
                     }
                 }
                },
                {
                     _id: 0,
                     name: 1,
                     address: 1
                }).limit(2).pretty()


// OUTPUT:

[
  {
    address: {
      building: '413',
      coord: [ -74.108808, 40.570254 ],
      street: 'New Dorp Lane',
      zipcode: '10306'
    },
    name: "Gennaro'S Rest & Pizzeria"
  },
  {
    address: {
      building: '41-19',
      coord: [ -73.8289053, 40.7581581 ],
      street: 'Kissena Boulevard',
      zipcode: '11355'
    },
    name: 'Woo Chon Restaurant'
  }
]