//---------------------------------------------------------------------------------------------------------------------
// 80.)Write a MongoDB query to find the cuisine type that is most likely to receive a "C" grade.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([ { $unwind: "$grades" },
                      { $match: { "grades.grade": "C" } },
                      { $group: { _id: "$cuisine", count: { $sum: 1 } } },
                      { $sort: {count: -1 } },
                      { $project: {_id:0, cuisine_type: "$_id", count: 1}}
                    ])


// OUTPUT:
[
  { count: 172, cuisine_type: 'American ' },
  { count: 59, cuisine_type: 'Italian' },
  { count: 46, cuisine_type: 'Pizza' },
  {
    count: 29,
    cuisine_type: 'Latin (Cuban, Dominican, Puerto Rican, South & Central American)'
  },
  { count: 28, cuisine_type: 'Chinese' },
  { count: 27, cuisine_type: 'Japanese' },
  { count: 21, cuisine_type: 'Pizza/Italian' },
  { count: 19, cuisine_type: 'Caribbean' },
  { count: 17, cuisine_type: 'Jewish/Kosher' },
  { count: 16, cuisine_type: 'Mexican' },
  { count: 15, cuisine_type: 'Bakery' },
  { count: 14, cuisine_type: 'Hamburgers' },
  { count: 11, cuisine_type: 'Indian' },
  { count: 9, cuisine_type: 'Thai' },
  { count: 8, cuisine_type: 'French' },
  { count: 7, cuisine_type: 'Delicatessen' },
  { count: 7, cuisine_type: 'Korean' },
  { count: 7, cuisine_type: 'Café/Coffee/Tea' },
  { count: 6, cuisine_type: 'Spanish' },
  { count: 6, cuisine_type: 'Irish' }
]