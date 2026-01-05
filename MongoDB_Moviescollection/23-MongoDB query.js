//---------------------------------------------------------------------------------------------------------------------
// 23.)Find from the 'movies' collection in MongoDB with the most common genre among the movies.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.aggregate([
  {
    $unwind: '$genres'
  },
  {
    $group: {
      _id: '$genres',
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1, _id: 1 }
    //-> Önce count’a göre sırala (azalan), count değerleri eşitse, o kayıtlar arasında _id’ye göre sırala
  }//,
  //{
  //  $limit: 5
  //}
])


// OUTPUT:
[
  { _id: 'Drama', count: 13789 },
  { _id: 'Comedy', count: 7024 },
  { _id: 'Romance', count: 3665 },
  { _id: 'Crime', count: 2678 },
  { _id: 'Thriller', count: 2658 },
  { _id: 'Action', count: 2539 },
  { _id: 'Documentary', count: 2129 },
  { _id: 'Adventure', count: 2045 },
  { _id: 'Horror', count: 1703 },
  { _id: 'Biography', count: 1404 },
  { _id: 'Family', count: 1311 },
  { _id: 'Mystery', count: 1259 },
  { _id: 'Fantasy', count: 1153 },
  { _id: 'Sci-Fi', count: 1034 },
  { _id: 'History', count: 999 },
  { _id: 'Animation', count: 971 },
  { _id: 'Music', count: 840 },
  { _id: 'War', count: 794 },
  { _id: 'Musical', count: 487 },
  { _id: 'Short', count: 478 }
  { _id: 'Sport', count: 390 },
  { _id: 'Western', count: 274 },
  { _id: 'Film-Noir', count: 105 },
  { _id: 'News', count: 51 },
  { _id: 'Talk-Show', count: 1 }
]