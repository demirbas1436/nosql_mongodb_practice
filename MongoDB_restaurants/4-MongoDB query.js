//---------------------------------------------------------------------------------------------------------------------
// 4.)Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the
//field _id for all the documents in the collection restaurant.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find({},{ "restaurant_id" : 1, "name": 1, "borough": 1, "address.zipcode" : 1, "_id": 0 })


// OUTPUT:
[
  {
    address: { zipcode: '10462' },
    borough: 'Bronx',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    address: { zipcode: '10462' },
    borough: 'Bronx',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  }
]