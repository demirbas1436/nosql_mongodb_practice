//---------------------------------------------------------------------------------------------------------------------
// 22.)Find all movies from the 'movies' collection in MongoDB with the average runtime of movies released
//in each country.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.aggregate([
  {
    $match: { type: 'movie' }
  },
  {
    $group: {
      _id: '$countries',
      averageRuntime: { $avg: '$runtime' }
    }
  },
  {
    $limit: 5
  }
])


// OUTPUT:
[
  { _id: [ 'Taiwan', 'France' ], averageRuntime: 107.75 },
  { _id: [ 'Brazil', 'Germany' ], averageRuntime: 106 },
  { _id: [ 'Mexico', 'Italy' ], averageRuntime: 123 },
  { _id: [ 'Argentina', 'Chile', 'Spain' ], averageRuntime: 100 },
  { _id: [ 'USA', 'France', 'Belgium' ], averageRuntime: 85 }
]