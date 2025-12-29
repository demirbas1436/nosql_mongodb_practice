//---------------------------------------------------------------------------------------------------------------------
// 21.)Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants
//which prepared dish except 'American' and 'Chinees' or restaurant's name begins with letter 'Wil'.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { $or: [ {name: /^Wil/},
                     {"$and": [
                        {cuisine : { $ne: "American" } },
                        {cuisine : { $ne: "Chinees" } }
                              ]}
                            ]},
                     { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 } ).limit(2).pretty()


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