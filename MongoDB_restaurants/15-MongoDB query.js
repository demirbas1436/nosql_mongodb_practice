//---------------------------------------------------------------------------------------------------------------------
// 15.)Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants
//which contain 'ces' as last three letters for its name.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { name: /ces$/ }, { "restaurant_id" : 1, "name": 1,"borough": 1, "cuisine" : 1 })


// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cec338'),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Pieces',
    restaurant_id: '40399910'
  },
  {
    _id: ObjectId('691f21c41914a35d89cec3f7'),
    borough: 'Queens',
    cuisine: 'American ',
    name: 'S.M.R Restaurant Services',
    restaurant_id: '40403857'
  },
  {
    _id: ObjectId('691f21c41914a35d89cec3fd'),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Good Shepherd Services',
    restaurant_id: '40403989'
  },
  {
    _id: ObjectId('691f21c41914a35d89cec8b0'),
    borough: 'Queens',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: "The Ice Box-Ralph'S Famous Italian Ices",
    restaurant_id: '40690899'
  },
  {
    _id: ObjectId('691f21c41914a35d89cecab2'),
    borough: 'Brooklyn',
    cuisine: 'Jewish/Kosher',
    name: 'Alices',
    restaurant_id: '40782042'
  },
  {
    _id: ObjectId('691f21c41914a35d89ceccce'),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Re: Sources',
    restaurant_id: '40876068'
  }
]