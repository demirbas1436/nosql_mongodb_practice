//---------------------------------------------------------------------------------------------------------------------
// 87.)Write a MongoDB query to find the borough with the highest number of restaurants that have a grade of "A"
//and a score greater than or equal to 90.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([
                      { $match: { "grades.grade": "A", "grades.score": { $gte: 90 } } },
                      { $group: { _id: "$borough", count: { $sum: 1 } } }, { $sort: { count: -1 } },
                      { $project: { _id:0 , borough: "$_id", count: 1 }}
                    ])


// OUTPUT:

[ { count: 3, borough: 'Manhattan' } ]