//---------------------------------------------------------------------------------------------------------------------
// 24.)Find the movies released in the year with the highest average IMDb rating from the 'movies' collection in MongoDB.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.aggregate([
  {
    $group: {
      _id: "$year",
      averageRating: { $avg: "$imdb.rating" }
    }
  },
  {
    $sort: { averageRating: -1 }
  },
  {
    $lookup: {
      from: "denem8",
      localField: "_id",
      foreignField: "year",
      as: "movies"
    }
  },
  {
    $unwind: "$movies"
  },
  {
    $replaceRoot: { newRoot: "$movies" }
  },
  {
    $project: {
      _id: 0,
      title: 1,
      year: 1,
      "imdb.rating": 1,
      genres: 1
    }
  },
  {
    $limit: 5
  }
])


// OUTPUT:
[
  {
    genres: [ 'Drama' ],
    title: 'Civilization',
    year: { '$numberInt': '1916' },
    imdb: { rating: { '$numberDouble': '6.3' } }
  },
  {
    genres: [ 'Romance', 'Western' ],
    title: "Hell's Hinges",
    year: { '$numberInt': '1916' },
    imdb: { rating: { '$numberDouble': '6.4' } }
  },
  {
    genres: [ 'Drama', 'History' ],
    title: "Intolerance: Love's Struggle Throughout the Ages",
    year: { '$numberInt': '1916' },
    imdb: { rating: { '$numberInt': '8' } }
  },
  {
    genres: [ 'Drama' ],
    title: 'Where Are My Children?',
    year: { '$numberInt': '1916' },
    imdb: { rating: { '$numberDouble': '5.9' } }
  }
]