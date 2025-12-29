//---------------------------------------------------------------------------------------------------------------------
// 82.)Write a MongoDB query to find the restaurants that achieved the highest total score.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([ { $unwind: "$grades" },
                      { $group: { _id: "$name", totalScore: { $sum: "$grades.score" } } },
                      { $sort: { totalScore: -1 } },
                      { $group: { _id: "$totalScore", restaurants: { $push: "$_id" } } },
                      { $sort: { _id: -1 } },
                      { $unwind: "$restaurants" },
                      { $group: { _id: "$_id", restaurants: { $push: "$restaurants" } } }, //-> this id is totalScore
                      { $project: {_id: 0, TotalScore: "$_id", restaurants: 1}},
                      { $sort: { TotalScore: -1 } },
                      { $limit: 1 }
                    ] )


// OUTPUT:

[ { restaurants: [ "Mcdonald'S" ], TotalScore: 3470 } ]