//---------------------------------------------------------------------------------------------------------------------
// 17.)Write a MongoDB query to find the restaurants which belong to the borough Bronx
//and prepared either American or Chinese dish.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { borough : "Bronx" , $or : [ { "cuisine" : "American " }, { "cuisine" : "Chinese" } ] } ).limit(2).pretty()

// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebeaf'),
    address: {
      building: '2300',
      coord: [ -73.8786113, 40.8502883 ],
      street: 'Southern Boulevard',
      zipcode: '10460'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      { date: { '$date': 1401235200000 }, grade: 'A', score: 11 },
      { date: { '$date': 1371600000000 }, grade: 'A', score: 4 },
      { date: { '$date': 1339718400000 }, grade: 'A', score: 3 }
    ],
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebec8'),
    address: {
      building: '1236',
      coord: [ -73.8893654, 40.81376179999999 ],
      street: '238 Spofford Ave',
      zipcode: '10474'
    },
    borough: 'Bronx',
    cuisine: 'Chinese',
    grades: [
      { date: { '$date': 1388361600000 }, grade: 'A', score: 8 },
      { date: { '$date': 1357603200000 }, grade: 'A', score: 10 },
      { date: { '$date': 1339459200000 }, grade: 'B', score: 15 }
    ],
    name: 'Happy Garden',
    restaurant_id: '40363289'
  }
]