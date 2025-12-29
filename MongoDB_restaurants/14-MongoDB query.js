//---------------------------------------------------------------------------------------------------------------------
// 14.)Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants
//which contain 'Wil' as first three letters for its name.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { name: /^Wil/ }, { "restaurant_id" : 1, "name": 1, "borough": 1, "cuisine" : 1 })


// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebeac'),
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    name: "Wilken'S Fine Food",
    restaurant_id: '40356483'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebeaf'),
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    _id: ObjectId('691f21c41914a35d89ceccb4'),
    borough: 'Bronx',
    cuisine: 'Pizza',
    name: 'Wilbel Pizza',
    restaurant_id: '40871979'
  }
]