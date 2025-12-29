//---------------------------------------------------------------------------------------------------------------------
// 31.)Write a  MongoDB query to find the restaurant name, borough, longitude and attitude and cuisine
//for those restaurants which contains 'mon' as three letters somewhere in its name.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { name: { $regex: /mon/i } }, { "name": 1, "borough": 1, "address.coord": 1, "cuisine" : 1 } ).limit(2).pretty()

// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebf39'),
    address: { coord: [ -73.98306099999999, 40.7441419 ] },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: "Desmond'S Tavern" //-> contains the character mon
  },
  {
    _id: ObjectId('691f21c41914a35d89cebf42'),
    address: { coord: [ -73.8221418, 40.7272376 ] },
    borough: 'Queens',
    cuisine: 'Jewish/Kosher',
    name: 'Shimons Kosher Pizza' //-> contains the character mon
  }
]


// INPUT:
db.denem2.find({ name : { $regex : "mon.*", $options: "i" } },{"name":1, "borough":1, "address.coord":1, "cuisine" :1}).limit(2).pretty()

// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebf39'),
    address: { coord: [ -73.98306099999999, 40.7441419 ] },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: "Desmond'S Tavern"
  },
  {
    _id: ObjectId('691f21c41914a35d89cebf42'),
    address: { coord: [ -73.8221418, 40.7272376 ] },
    borough: 'Queens',
    cuisine: 'Jewish/Kosher',
    name: 'Shimons Kosher Pizza'
  }
]

/*
Explanation of Regex Usage
In MongoDB, two different ways of writing regex can yield similar results:
    // 1. Regex literal
    db.denem2.find({ name: { $regex: /mon/i } })

    // 2. Regex string
    db.denem2.find({ name: { $regex: "mon.*", $options: "i" } })

Both queries return records that contain the string "mon". This is because:

/mon/i → a regex literal that searches for the string "mon" anywhere, case-insensitive.

"mon.*" → when provided as a string regex, it targets matches that start with "mon", but MongoDB's regex engine
interprets it more broadly, matching records where "mon" appears anywhere in the string.
*/



// INPUT:
// only those starting with "mon"
db.denem2.find({ name: { $regex: /^mon/i } }, {"name":1, "borough":1, "address.coord":1, "cuisine" :1}).limit(2).pretty()

// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cec07f'),
    address: { coord: [ -74.001094, 40.729583 ] },
    borough: 'Manhattan',
    cuisine: 'Italian',
    name: "Monte'S" //->starts with "mon"
  },
  {
    _id: ObjectId('691f21c41914a35d89cec09b'),
    address: { coord: [ -73.9979536, 40.6914024 ] },
    borough: 'Brooklyn',
    cuisine: 'Bottled beverages, including water, sodas, juices, etc.',
    name: 'Montero Bar & Grill' //->starts with "mon"
  }
]