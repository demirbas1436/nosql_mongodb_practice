//---------------------------------------------------------------------------------------------------------------------
// 79.)Write a MongoDB query to find all the restaurants with the highest number of "A" grades.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([ { $unwind: "$grades" },
                     { $match: { "grades.grade": "A" } },
                     { $group: { _id: "$restaurant_id", count: { $sum: 1 } } },
                     { $sort: { count: -1 } },
                     { $group: { _id: "$count", restaurants: { $push: "$_id" } } },
                     { $sort: { _id: -1 } },
                     { $limit: 1 },
                     { $project: { _id:0, restaurant_id:"$_id", restaurants: 1 } }
                    ])

// OUTPUT:
[ { restaurants: [ '30075445' ], restaurant_id: 8 } ]