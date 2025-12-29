//---------------------------------------------------------------------------------------------------------------------
// 57.)Write a MongoDB query to find the count of restaurants that received a grade of 'A' for each cuisine.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([ { $unwind: "$grades"},
                      { $match:  { "grades.grade": "A" } },
                      { $group: { _id: "$cuisine", count: { $sum:1 } } },
                      { $project: { _id:0, cuisine_A_of_grade: "$_id", count: 1 } }
                    ])


// OUTPUT:
[
  { count: 276, cuisine_A_of_grade: 'Mexican' },
  { count: 86, cuisine_A_of_grade: 'Sandwiches/Salads/Mixed Buffet' },
  { count: 16, cuisine_A_of_grade: 'Afghan' },
  { count: 280, cuisine_A_of_grade: 'Japanese' },
  { count: 8, cuisine_A_of_grade: 'Vietnamese/Cambodian/Malaysia' },
  { count: 328, cuisine_A_of_grade: 'Delicatessen' },
  { count: 50, cuisine_A_of_grade: 'Thai' },
  { count: 9, cuisine_A_of_grade: 'Egyptian' },
  { count: 43, cuisine_A_of_grade: 'Russian' },
  { count: 136, cuisine_A_of_grade: 'Seafood' },
  { count: 34, cuisine_A_of_grade: 'Asian' },
  { count: 670, cuisine_A_of_grade: 'Hamburgers' },
  {
    count: 39,
    cuisine_A_of_grade: 'Bottled beverages, including water, sodas, juices, etc.'
  },
  { count: 220, cuisine_A_of_grade: 'Jewish/Kosher' },
  { count: 129, cuisine_A_of_grade: 'Chicken' },
  { count: 95, cuisine_A_of_grade: 'Ice Cream, Gelato, Yogurt, Ices' },
  { count: 33, cuisine_A_of_grade: 'Barbecue' },
  { count: 13, cuisine_A_of_grade: 'English' },
  { count: 414, cuisine_A_of_grade: 'Pizza/Italian' },
  {
    count: 459,
    cuisine_A_of_grade: 'Latin (Cuban, Dominican, Puerto Rican, South & Central American)'
  }
]