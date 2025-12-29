//---------------------------------------------------------------------------------------------------------------------
// 24.) Write a  MongoDB query to find the restaurant Id, name, address and geographical location for those restaurants
// where 2nd element of coord array contains a value which is more than 42 and upto 52.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { "address.coord.1": { $gt: 42, $lte: 52 } },
                { "restaurant_id": 1, "name": 1, "address": 1, "coord": 1 } ).limit(2).pretty()


// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cec147'),
    address: {
      building: '47',
      coord: [ -78.877224, 42.89546199999999 ],
      street: 'Broadway @ Trinity Pl',
      zipcode: '10006'
    },
    name: "T.G.I. Friday'S",
    restaurant_id: '40387990'
  },
  {
    _id: ObjectId('691f21c41914a35d89cec173'),
    address: {
      building: '1',
      coord: [ -0.7119979, 51.6514664 ],
      street: 'Pennplaza E, Penn Sta',
      zipcode: '10001'
    },
    name: 'T.G.I. Fridays',
    restaurant_id: '40388936'
  }
]