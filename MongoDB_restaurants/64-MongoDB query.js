//---------------------------------------------------------------------------------------------------------------------
// 64.)Write a MongoDB query to find the average score for each borough.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([
                       { $unwind: "$grades" },
                       { $group: { _id: "$borough", avgScore: { $avg: "$grades.score" } } },
                       { $project: { _id:0, borough: "$_id", avgScore: 1 } }
                    ])

// OUTPUT:

[
  { avgScore: 11.492063492063492, borough: 'Brooklyn' },
  { avgScore: 11.375442086648983, borough: 'Manhattan' },
  { avgScore: 11.603178953137846, borough: 'Queens' },
  { avgScore: 11.292828685258964, borough: 'Bronx' },
  { avgScore: 11.142215568862275, borough: 'Staten Island' }
]