//---------------------------------------------------------------------------------------------------------------------
// 2.)Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents
//in the collection restaurant.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( {}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// OUTPUT:
[
  {
    borough: 'Bronx',
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    borough: 'Bronx',
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  }
]
