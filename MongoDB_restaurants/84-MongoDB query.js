//---------------------------------------------------------------------------------------------------------------------
// 84.)Write a MongoDB query to find the restaurant with the most recent grade date.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([ { $unwind: "$grades" },
                      { $sort: { "grades.date": -1 } },
                      { $limit: 1 },
                      { $project: { name: 1, "grades.date": 1, _id: 0 } }
                    ])


// OUTPUT:

[
  {
    grades: { date: { '$date': 1421712000000 } },
    name: 'Ambassador Diner'
  }
]