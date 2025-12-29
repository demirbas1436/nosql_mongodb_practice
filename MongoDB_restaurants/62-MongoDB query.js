//---------------------------------------------------------------------------------------------------------------------
// 62.)Write a MongoDB query to find the highest score for each cuisine.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate( [
                       { $unwind: "$grades"},
                       { $group: { _id: "$cuisine", maxScore: { $max: "$grades.score" } } },
                       { $project: { _id:0, cuisine: "$_id", maxScore: 1 } }
                     ])



// OUTPUT:

[
  { maxScore: 46, cuisine: 'Irish' },
  { maxScore: 27, cuisine: 'Hotdogs' },
  { maxScore: 27, cuisine: 'German' },
  { maxScore: 13, cuisine: 'Salads' },
  { maxScore: 26, cuisine: 'Turkish' },
  { maxScore: 68, cuisine: 'Caribbean' },
  { maxScore: 33, cuisine: 'Ice Cream, Gelato, Yogurt, Ices' },
  { maxScore: 48, cuisine: 'Chicken' },
  { maxScore: 56, cuisine: 'Jewish/Kosher' },
  { maxScore: 46, cuisine: 'Barbecue' },
  { maxScore: 12, cuisine: 'Bangladeshi' },
  { maxScore: 98, cuisine: 'Pizza/Italian' },
  { maxScore: 17, cuisine: 'English' },
  { maxScore: 30, cuisine: 'Sandwiches' },
  { maxScore: 14, cuisine: 'Pakistani' },
  { maxScore: 56, cuisine: 'Café/Coffee/Tea' },
  { maxScore: 37, cuisine: 'Pancakes/Waffles' },
  { maxScore: 27, cuisine: 'Mediterranean' },
  { maxScore: 23, cuisine: 'Filipino' },
  { maxScore: 13, cuisine: 'Ethiopian' }
]