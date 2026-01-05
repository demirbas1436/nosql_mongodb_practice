//---------------------------------------------------------------------------------------------------------------------
// 25.)Find the top 10 directors with the most movies from the 'movies' collection in MongoDB.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.aggregate([
  {
    $group: {
      _id: "$directors",
      movieCount: { $sum: 1 }
    }
  },
  {
    $sort: { movieCount: -1 }
  },
  {
    $limit: 10
  }
])



// OUTPUT:
[
  { _id: null, movieCount: 265 },
  { _id: [ 'Woody Allen' ], movieCount: 39 },
  { _id: [ 'Takashi Miike' ], movieCount: 33 },
  { _id: [ 'Alfred Hitchcock' ], movieCount: 31 },
  { _id: [ 'Werner Herzog' ], movieCount: 31 },
  { _id: [ 'John Huston' ], movieCount: 30 },
  { _id: [ 'John Ford' ], movieCount: 29 },
  { _id: [ 'Martin Scorsese' ], movieCount: 29 },
  { _id: [ 'Sidney Lumet' ], movieCount: 29 },
  { _id: [ 'Steven Spielberg' ], movieCount: 28 }
]