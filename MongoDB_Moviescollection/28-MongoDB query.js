//---------------------------------------------------------------------------------------------------------------------
// 28.)Write a query in MongoDB to find the movie with the highest IMDb rating and viewer rating on Tomatoes from the
//'movies' collection.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.aggregate([
  {
    $project: {
      _id: 1,
      title: 1,
      imdbRating: {
        $convert: {
          input: "$imdb.rating",
          to: "double",
          onError: null,
          onNull: null
        }
      },
      tomatoViewerRating: {
        $convert: {
          input: "$tomatoes.viewer.rating",
          to: "double",
          onError: null,
          onNull: null
        }
      }
    }
  },
  {
    $sort: {
      imdbRating: -1,
      tomatoViewerRating: -1
    }
  },
  {
    $limit: 5
  }
])



// OUTPUT:
[
  {
    _id: ObjectId('573a139ff29313caabd003c4'),
    title: 'Band of Brothers',
    imdbRating: 9.6,
    tomatoViewerRating: null
  },
  {
    _id: ObjectId('573a13b8f29313caabd4c241'),
    title: 'Planet Earth',
    imdbRating: 9.5,
    tomatoViewerRating: null
  },
  {
    _id: ObjectId('573a13f0f29313caabdda542'),
    title: 'A Brave Heart: The Lizzie Velasquez Story',
    imdbRating: 9.4,
    tomatoViewerRating: null
  },
  {
    _id: ObjectId('573a13a3f29313caabd0e77b'),
    title: 'The Civil War',
    imdbRating: 9.4,
    tomatoViewerRating: null
  },
  {
    _id: ObjectId('573a1398f29313caabcebc0b'),
    title: 'The Civil War',
    imdbRating: 9.4,
    tomatoViewerRating: null
  }
]