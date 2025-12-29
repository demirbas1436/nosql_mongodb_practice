//---------------------------------------------------------------------------------------------------------------------
// 65.)Write a MongoDB query to find the highest score for each borough.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([
                      { $unwind: "$grades" },
                      { $group: { _id: "$borough", maxScore: { $max: "$grades.score" } } },
                      { $project: { _id:0, borough_avg: "$_id", maxScore: 1 } }
                    ])

// OUTPUT:

[
  { maxScore: 77, borough_avg: 'Brooklyn' },
  { maxScore: 66, borough_avg: 'Queens' },
  { maxScore: 58, borough_avg: 'Staten Island' },
  { maxScore: 76, borough_avg: 'Bronx' },
  { maxScore: 131, borough_avg: 'Manhattan' }
]