//---------------------------------------------------------------------------------------------------------------------
// 54.)Write a MongoDB query to find the count of restaurants in each borough.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate( [  { $group: { _id: "$borough", count: { $sum:1 } } },
                        { $project: { _id:0, borough: "$_id", count:1 } },
                        { $sort: { count:-1 } }
                     ])

/*
Atlas atlas-h7u0ph-shard-0 [primary] denem> db.denem2.aggregate([{$group: {_id: "$borough"}},{ $count:"total" }])
[ { total: 5 } ]
*/
// OUTPUT:

[
  { count: 1883, borough: 'Manhattan' },
  { count: 738, borough: 'Queens' },
  { count: 684, borough: 'Brooklyn' },
  { count: 310, borough: 'Bronx' },
  { count: 158, borough: 'Staten Island' }
]