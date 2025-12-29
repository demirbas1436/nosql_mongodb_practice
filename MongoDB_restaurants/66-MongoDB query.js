//---------------------------------------------------------------------------------------------------------------------
// 66.)Write a MongoDB query to find the lowest score for each borough.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate( [
                        { $group: { _id: "$borough", lowestScore: { $min: "$grades.score" } } },
                        { $project: { _id:0, borough_avg: "$_id", lowestScore: 1 } }
                     ])


// OUTPUT:

[
  { lowestScore: [ 0, 13, 7, 6 ], borough_avg: 'Bronx' },
  { lowestScore: [ 0, 2, 3, 9, 12, 4 ], borough_avg: 'Queens' },
  { lowestScore: [ 0, 0, 2 ], borough_avg: 'Manhattan' },
  { lowestScore: [ 0, 2, 10, 0, 12 ], borough_avg: 'Brooklyn' },
  { lowestScore: [ -1, 13, 10, 10 ], borough_avg: 'Staten Island' }
]