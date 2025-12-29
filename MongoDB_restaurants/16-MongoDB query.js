//---------------------------------------------------------------------------------------------------------------------
// 16.)Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants
//which contain 'Reg' as three letters somewhere in its name.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { "name": /.*Reg.*/ }, { "restaurant_id" : 1, "name": 1, "borough": 1, "cuisine" : 1 })


// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebead'),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Regina Caterers',
    restaurant_id: '40356649'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebfaa'),
    borough: 'Manhattan',
    cuisine: 'Café/Coffee/Tea',
    name: 'Caffe Reggio',
    restaurant_id: '40369418'
  },
  {
    _id: ObjectId('691f21c41914a35d89cec0b9'),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Regency Hotel',
    restaurant_id: '40382679'
  },
  {
    _id: ObjectId('691f21c41914a35d89cec3d6'),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Regency Whist Club',
    restaurant_id: '40402377'
  },
  {
    _id: ObjectId('691f21c41914a35d89cec4b9'),
    borough: 'Queens',
    cuisine: 'American ',
    name: 'Rego Park Cafe',
    restaurant_id: '40523342'
  },
  {
    _id: ObjectId('691f21c41914a35d89cecb27'),
    borough: 'Queens',
    cuisine: 'Pizza',
    name: 'Regina Pizza',
    restaurant_id: '40801325'
  },
  {
    _id: ObjectId('691f21c41914a35d89cecd3e'),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Regal Entertainment Group',
    restaurant_id: '40891782'
  }
]