//---------------------------------------------------------------------------------------------------------------------
// 81.)Write a MongoDB query to find the restaurant that has the highest average score for thecuisine "Turkish".
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([ { $unwind: "$grades" },
                      { $match: {cuisine: "Turkish" } },
                      { $group: { _id: "$name", average_score_Turkish: {$avg: "$grades.score"} } },
                      { $sort: { average_score_Turkish: -1 } },
                      { $limit: 1},
                      { $project: { _id: 0, name: "$_id", average_score_Turkish: 1, "grades.score": 1}}
                    ])
/*
[
  { average_score_Turkish: 13.6, name: 'Turkish Cuisine' },
  { average_score_Turkish: 13.5, name: 'Memo Shish Kebab' },
  { average_score_Turkish: 12, name: 'Uskudar Restaurant' },
  { average_score_Turkish: 11.75, name: 'Turkuaz Turkish Cuisine' },
  { average_score_Turkish: 11.4, name: 'Saharas Turkish Cuisine' },
  { average_score_Turkish: 10.8, name: 'Pasha Turkish Restaurant' },
  { average_score_Turkish: 10.5, name: 'The Country Cafe' },
  { average_score_Turkish: 10.5, name: 'Istanbul Restaurant' },
  {
    average_score_Turkish: 10.285714285714286,
    name: 'Sahara Restaurant'
  },
  { average_score_Turkish: 10, name: 'Kebab House' },
  { average_score_Turkish: 7.666666666666667, name: 'Turkish Kitchen' }
]
*/
// OUTPUT:

[ { average_score_Turkish: 13.6, name: 'Turkish Cuisine' } ]