//---------------------------------------------------------------------------------------------------------------------
// 56.)  Write a MongoDB query to find the count of restaurants for each cuisine and borough.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate( [ { $group: { _id: { cuisine: "$cuisine", borough: "$borough" }, count: { $sum:1 } } },
                       { $project: { _id:0, cuisine_and_borough: "$_id", count: 1 } },
                       { $sort: { count:-1 } }
                     ])



// OUTPUT:


[
  {
    count: 734,
    cuisine_and_borough: { cuisine: 'American ', borough: 'Manhattan' }
  },
  {
    count: 204,
    cuisine_and_borough: { cuisine: 'Italian', borough: 'Manhattan' }
  },
  {
    count: 194,
    cuisine_and_borough: { cuisine: 'American ', borough: 'Queens' }
  },
  {
    count: 190,
    cuisine_and_borough: { cuisine: 'American ', borough: 'Brooklyn' }
  },
  {
    count: 133,
    cuisine_and_borough: { cuisine: 'Café/Coffee/Tea', borough: 'Manhattan' }
  },
  {
    count: 80,
    cuisine_and_borough: { cuisine: 'Pizza', borough: 'Queens' }
  }
]