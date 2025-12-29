//---------------------------------------------------------------------------------------------------------------------
// 19.)Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants
//which are not belonging to the borough Staten Island or Queens or Bronxor Brooklyn.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( {"borough": { $nin: [ "Staten Island","Queens","Bronx","Brooklyn" ] } },
                     { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine" : 1 }).limit(2).pretty()


// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebea7'),
    borough: 'Manhattan',
    cuisine: 'Irish',
    name: 'Dj Reynolds Pub And Restaurant',
    restaurant_id: '30191841'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebeb2'),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
  }
]