//---------------------------------------------------------------------------------------------------------------------
// 77.)Write a MongoDB query to find the name, address, and cuisine of the restaurants that have a cuisine
//that contains the word 'Pizza'.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { cuisine: { $regex: /Pizza/i } },{ name: 1, address: 1, cuisine: 1, _id: 0 }).limit(2).pretty()


// OUTPUT:

[
  {
    address: {
      building: '464',
      coord: [ -73.9791458, 40.744328 ],
      street: '3 Avenue',
      zipcode: '10016'
    },
    cuisine: 'Pizza',
    name: "Domino'S Pizza"
  },
  {
    address: {
      building: '148',
      coord: [ -73.9806854, 40.7778589 ],
      street: 'West   72 Street',
      zipcode: '10023'
    },
    cuisine: 'Pizza',
    name: "Domino'S Pizza"
  }
]