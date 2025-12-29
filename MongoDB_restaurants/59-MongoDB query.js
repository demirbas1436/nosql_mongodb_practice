//---------------------------------------------------------------------------------------------------------------------
// 59.)Write a MongoDB query to find the count of restaurants that received a grade of 'A' for each cuisine and borough.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate( [ { $unwind: "$grades" },
                       { $match: { "grades.grade": "A" } },
                       { $group: { _id: { borough: "$borough", cuisine: "$cuisine" }, count: { $sum:1 } } },
                       { $project: { _id:0, boroughandcuisine_A_of_grade: "$_id", count: 1 } }
                     ])

// OUTPUT:

[
  {
    count: 81,
    boroughandcuisine_A_of_grade: { borough: 'Brooklyn', cuisine: 'Café/Coffee/Tea' }
  },
  {
    count: 135,
    boroughandcuisine_A_of_grade: { borough: 'Manhattan', cuisine: 'Hamburgers' }
  },
  {
    count: 18,
    boroughandcuisine_A_of_grade: { borough: 'Queens', cuisine: 'Pancakes/Waffles' }
  },
  {
    count: 267,
    boroughandcuisine_A_of_grade: { borough: 'Bronx', cuisine: 'American ' }
  },
  {
    count: 16,
    boroughandcuisine_A_of_grade: {
      borough: 'Manhattan',
      cuisine: 'Bottled beverages, including water, sodas, juices, etc.'
    }
  },
  {
    count: 53,
    boroughandcuisine_A_of_grade: { borough: 'Bronx', cuisine: 'Italian' }
  },
  {
    count: 166,
    boroughandcuisine_A_of_grade: { borough: 'Brooklyn', cuisine: 'Pizza/Italian' }
  },
  {
    count: 189,
    boroughandcuisine_A_of_grade: { borough: 'Brooklyn', cuisine: 'Italian' }
  }
]