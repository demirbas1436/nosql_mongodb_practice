//---------------------------------------------------------------------------------------------------------------------
// 58.)Write a MongoDB query to find the count of restaurants that received a grade of 'A' for each borough.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate( [ { $unwind: "$grades" },
                       { $match: { "grades.grade": "A" } },
                       { $group: { _id: "$borough", count: { $sum: 1 } } },
                       { $project: { _id:0, borough_A_of_grade: "$_id", count: 1 } }
                     ])

// OUTPUT:

[
  { count: 1211, borough_A_of_grade: 'Bronx' },
  { count: 2651, borough_A_of_grade: 'Brooklyn' },
  { count: 7447, borough_A_of_grade: 'Manhattan' },
  { count: 2969, borough_A_of_grade: 'Queens' },
  { count: 575, borough_A_of_grade: 'Staten Island' }
]