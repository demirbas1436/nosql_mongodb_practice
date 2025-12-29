//---------------------------------------------------------------------------------------------------------------------
// 20.)Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurant
//which achieved a score which is not more than 10.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { "grades.score": { $not: { $gt : 10 } } },
                { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 } ).limit(2).pretty()


// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebeb0'),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'C & C Catering Service',
    restaurant_id: '40357437'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebeb2'),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
  }
]