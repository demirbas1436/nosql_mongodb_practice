//---------------------------------------------------------------------------------------------------------------------
// 18.)Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants
//which belong to the borough Staten Island or Queens or Bronxor Brooklyn.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( {"borough" : { $in: [ "Staten Island","Queens","Bronx","Brooklyn" ] } },
                     { "restaurant_id" : 1, "name": 1, "borough": 1, "cuisine": 1 } ).limit(2).pretty()


// OUTPUT:
[
  {
    _id: ObjectId('691f1a551914a35d89cebea4'),
    borough: 'Bronx',
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebea5'),
    borough: 'Bronx',
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  }
]