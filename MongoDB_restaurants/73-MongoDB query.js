//---------------------------------------------------------------------------------------------------------------------
// 73.)Write a MongoDB query to find the name and address of the restaurants that have the word 'coffee' in their name.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { name: { $regex: /coffee/i } }, { _id: 0, name: 1, address: 1 } ).limit(2).pretty()

// OUTPUT:

[
  {
    address: {
      building: '26',
      coord: [ -73.9983, 40.715051 ],
      street: 'Pell Street',
      zipcode: '10013'
    },
    name: 'Mee Sum Coffee Shop'
  },
  {
    address: {
      building: '1191',
      coord: [ -73.8513114, 40.8316981 ],
      street: 'Castle Hill Avenue',
      zipcode: '10462'
    },
    name: "Lulu'S Coffee Shop"
  }
]