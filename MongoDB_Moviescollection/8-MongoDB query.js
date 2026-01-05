//---------------------------------------------------------------------------------------------------------------------
// 1.)Retrieve all movies from the 'movies' collection that have complete information and have an IMDb rating higher than 7.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find({ "imdb.rating": { $gt: { $numberInt: "7"} } }).limit(1).pretty()



// OUTPUT:
[
  {
    _id: ObjectId('573a1390f29313caabcd5c0f'),
    plot: 'The story of a poor young woman, separated by prejudice from her husband and baby, is interwoven with tales of intolerance from throughout history.',
    genres: [ 'Drama', 'History' ],
    runtime: 197,
    rated: 'NOT RATED',
    cast: [
      'Lillian Gish',
      'Spottiswoode Aitken',
      'Mary Alden',
      'Frank Bennett'
    ],
    num_mflix_comments: { '$numberInt': '1' },
    poster: 'https://m.media-amazon.com/images/M/MV5BZTc0YjA1ZjctOTFlZi00NWRiLWE2MTAtZDE1MWY1YTgzOTJjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    title: "Intolerance: Love's Struggle Throughout the Ages",
    fullplot: "Intolerance and its terrible effects are examined in four historical eras. In ancient Babylon, a mountain girl is caught up in the religious rivalry that leads to the city's downfall. In Judea, the hypocritical Pharisees condemn Jesus Christ. In 1572 Paris, unaware of the impending St. Bartholomew's Day Massacre, two young Huguenots prepare for marriage. Finally, in modern America, social reformers destroy the lives of a young woman and her beloved.",
    countries: [ 'USA' ],
    released: { '$date': { '$numberLong': '-1682726400000' } },
    directors: [ 'D.W. Griffith' ],
    writers: [ 'D.W. Griffith (scenario)', 'Anita Loos (titles)' ],
    awards: {
      wins: { '$numberInt': '1' },
      nominations: { '$numberInt': '0' },
      text: '1 win.'
    },
    lastupdated: '2015-09-05 00:01:19.580000000',
    year: { '$numberInt': '1916' },
    imdb: {
      rating: { '$numberInt': '8' },
      votes: { '$numberInt': '9880' },
      id: { '$numberInt': '6864' }
    },
    type: 'movie',
    tomatoes: {
      viewer: {
        rating: { '$numberDouble': '3.8' },
        numReviews: { '$numberInt': '4718' },
        meter: { '$numberInt': '78' }
      },
      dvd: { '$date': { '$numberLong': '1039478400000' } },
      critic: {
        rating: { '$numberDouble': '8.1' },
        numReviews: { '$numberInt': '32' },
        meter: { '$numberInt': '97' }
      },
      lastUpdated: { '$date': { '$numberLong': '1442336554000' } },
      consensus: "A pioneering classic and one of the most influential films ever made, D.W. Griffith's Intolerance stands as the crowning jewel in an incredible filmography.",
      rotten: { '$numberInt': '1' },
      production: 'Cohen Media Group',
      fresh: { '$numberInt': '31' }
    }
  }
]