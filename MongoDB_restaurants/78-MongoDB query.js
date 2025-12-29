//---------------------------------------------------------------------------------------------------------------------
// 78.)Write a  MongoDB query to find the restaurants achieved highest average score.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([
                     { $unwind: "$grades" },
                     { $group: { _id: "$restaurant_id", avgScore: {$avg: "$grades.score" } } },
                     { $sort: { avgScore: -1} },
                     { $limit: 1 },
                     { $project: { restaurant_id:"$_id" ,_id: 0, avgScore: 1 } }
])


// OUTPUT:

[ { avgScore: 38.6, restaurant_id: '40393488' } ]