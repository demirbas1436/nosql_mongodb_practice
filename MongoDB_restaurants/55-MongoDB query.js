//---------------------------------------------------------------------------------------------------------------------
// 55.)Write a MongoDB query to find the count of restaurants for each cuisine.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate( [ { $group: { _id: "$cuisine", count: { $sum: 1 } } },
                       { $project: { _id:0, cuisine: "$_id", count:1 } },
                       { $sort: { count:-1 } }
                     ])

// OUTPUT:
[
  { count: 1255, cuisine: 'American ' },
  { count: 325, cuisine: 'Italian' },
  { count: 270, cuisine: 'Pizza' },
  { count: 180, cuisine: 'Café/Coffee/Tea' },
  { count: 159, cuisine: 'Hamburgers' },
  { count: 128, cuisine: 'Bakery' },
  {
    count: 115,
    cuisine: 'Latin (Cuban, Dominican, Puerto Rican, South & Central American)'
  },
  { count: 115, cuisine: 'Chinese' },
  { count: 106, cuisine: 'Pizza/Italian' },
  { count: 80, cuisine: 'Japanese' },
  { count: 79, cuisine: 'Irish' },
  { count: 78, cuisine: 'Delicatessen' },
  { count: 75, cuisine: 'Caribbean' },
  { count: 73, cuisine: 'Mexican' },
  { count: 72, cuisine: 'French' },
  { count: 60, cuisine: 'Jewish/Kosher' },
  { count: 43, cuisine: 'Indian' },
  { count: 43, cuisine: 'Donuts' },
  { count: 42, cuisine: 'Spanish' },
  { count: 35, cuisine: 'Seafood' }
]