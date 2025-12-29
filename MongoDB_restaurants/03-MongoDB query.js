//---------------------------------------------------------------------------------------------------------------------
// 3.)Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id
//for all the documents in the collection restaurant.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find({},{ "restaurant_id" : 1, "name": 1, "borough": 1, "cuisine" : 1 ,"_id": 0 })

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
