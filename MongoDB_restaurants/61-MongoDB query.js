//---------------------------------------------------------------------------------------------------------------------
// 61.)Write a MongoDB query to find the average score for each cuisine.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([
                     { $unwind: "$grades" },
                     { $group: { _id: "$cuisine", avgScore: { $avg: "$grades.score" }}}
                    ])


// OUTPUT:
[
  { _id: 'Thai', avgScore: 14.733333333333333 },
  { _id: 'Soups & Sandwiches', avgScore: 8.394736842105264 },
  {
    _id: 'Latin (Cuban, Dominican, Puerto Rican, South & Central American)',
    avgScore: 12.617549668874172
  },
  { _id: 'Hamburgers', avgScore: 9.125854993160054 },
  {
    _id: 'Bottled beverages, including water, sodas, juices, etc.',
    avgScore: 12.297872340425531
  },
  { _id: 'Asian', avgScore: 12.826086956521738 },
  { _id: 'Seafood', avgScore: 10.967532467532468 },
  { _id: 'Russian', avgScore: 13.915254237288135 },
  { _id: 'Egyptian', avgScore: 12.727272727272727 },
  {
    _id: 'Vietnamese/Cambodian/Malaysia',
    avgScore: 16.772727272727273
  },
  { _id: 'Japanese', avgScore: 13.689054726368159 },
  {
    _id: 'Sandwiches/Salads/Mixed Buffet',
    avgScore: 9.322222222222223
  },
  { _id: 'Delicatessen', avgScore: 11.904645476772616 },
  { _id: 'Vegetarian', avgScore: 12.702127659574469 },
  { _id: 'Portuguese', avgScore: 14.7 },
  { _id: 'Filipino', avgScore: 9.6875 },
  { _id: 'Ethiopian', avgScore: 10 },
  { _id: 'Sandwiches', avgScore: 9.472527472527473 },
  { _id: 'Pancakes/Waffles', avgScore: 11.210526315789474 },
  { _id: 'Café/Coffee/Tea', avgScore: 7.988296488946684 }
]