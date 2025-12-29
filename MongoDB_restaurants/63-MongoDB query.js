//---------------------------------------------------------------------------------------------------------------------
// 63.)Write a MongoDB query to find the lowest score for each cuisine.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate( [
                       { $unwind: "$grades" },
                       { $group: { _id: "$cuisine", minScore: { $min: "$grades.score" } } },
                       { $project: { _id:0, cuisine: "$_id", minScore: 1 } }
                     ])

// OUTPUT:

[
  { minScore: 3, cuisine: 'Thai' },
  { minScore: 2, cuisine: 'Asian' },
  { minScore: 0, cuisine: 'Hamburgers' },
  {
    minScore: 0,
    cuisine: 'Latin (Cuban, Dominican, Puerto Rican, South & Central American)'
  },
  {
    minScore: 0,
    cuisine: 'Bottled beverages, including water, sodas, juices, etc.'
  },
  { minScore: 0, cuisine: 'Russian' },
  { minScore: 0, cuisine: 'Seafood' },
  { minScore: 7, cuisine: 'Egyptian' },
  { minScore: 0, cuisine: 'Japanese' },
  { minScore: 3, cuisine: 'Vietnamese/Cambodian/Malaysia' },
  { minScore: 0, cuisine: 'Sandwiches/Salads/Mixed Buffet' },
  { minScore: 0, cuisine: 'Delicatessen' },
  { minScore: 5, cuisine: 'Vegetarian' },
  { minScore: 7, cuisine: 'Portuguese' },
  { minScore: 4, cuisine: 'Ethiopian' },
  { minScore: 0, cuisine: 'Filipino' },
  { minScore: 0, cuisine: 'Café/Coffee/Tea' },
  { minScore: 3, cuisine: 'Pancakes/Waffles' },
  { minScore: 2, cuisine: 'Mediterranean' },
  { minScore: 0, cuisine: 'Sandwiches' }
]