//---------------------------------------------------------------------------------------------------------------------
// 6.) Retrieve all movies from the 'movies' collection that have complete information and are rated as "UNRATED".
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find({ rated: "UNRATED" }).limit(2).pretty()



// OUTPUT:
[
  {
    _id: ObjectId('573a1390f29313caabcd4135'),
    plot: 'Three men hammer on an anvil and pass a bottle of beer around.',
    genres: [ 'Short' ],
    runtime: 1,
    cast: [ 'Charles Kayser', 'John Ott' ],
    num_mflix_comments: { '$numberInt': '1' },
    title: 'Blacksmith Scene',
    fullplot: 'A stationary camera looks at a large anvil with a blacksmith behind it and one on either side. The smith in the middle draws a heated metal rod from the fire, places it on the anvil, and all three begin a rhythmic hammering. After several blows, the metal goes back in the fire. One smith pulls out a bottle of beer, and they each take a swig. Then, out comes the glowing metal and the hammering resumes.',
    countries: [ 'USA' ],
    released: { '$date': { '$numberLong': '-2418768000000' } },
    directors: [ 'William K.L. Dickson' ],
    rated: 'UNRATED',
    awards: {
      wins: { '$numberInt': '1' },
      nominations: { '$numberInt': '0' },
      text: '1 win.'
    },
    lastupdated: '2015-08-26 00:03:50.133000000',
    year: { '$numberInt': '1893' },
    imdb: {
      rating: { '$numberDouble': '6.2' },
      votes: { '$numberInt': '1189' },
      id: { '$numberInt': '5' }
    },
    type: 'movie',
    tomatoes: {
      viewer: {
        rating: { '$numberInt': '3' },
        numReviews: { '$numberInt': '184' },
        meter: { '$numberInt': '32' }
      },
      lastUpdated: { '$date': { '$numberLong': '1435516449000' } }
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd4323'),
    plot: 'A young boy, opressed by his mother, goes on an outing in the country with a social welfare group where he dares to dream of a land where the cares of his ordinary life fade.',
    genres: [ 'Short', 'Drama', 'Fantasy' ],
    runtime: 14,
    rated: 'UNRATED',
    cast: [
      'Martin Fuller',
      'Mrs. William Bechtel',
      'Walter Edwin',
      'Ethel Jewett'
    ],
    num_mflix_comments: { '$numberInt': '2' },
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMzMDcxMjgyNl5BMl5BanBnXkFtZTcwOTgxNjg4Mg@@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Land Beyond the Sunset',
    fullplot: "Thanks to the Fresh Air Fund, a slum child escapes his drunken mother for a day's outing in the country. Upon arriving, he and the other children are told a story about a mythical land of no pain. Rather then return to the slum at day's end, the lad seeks to journey to that beautiful land beyond the sunset.",
    languages: [ 'English' ],
    released: { '$date': { '$numberLong': '-1804377600000' } },
    directors: [ 'Harold M. Shaw' ],
    writers: [ 'Dorothy G. Shore' ],
    awards: {
      wins: { '$numberInt': '1' },
      nominations: { '$numberInt': '0' },
      text: '1 win.'
    },
    lastupdated: '2015-08-29 00:27:45.437000000',
    year: { '$numberInt': '1912' },
    imdb: {
      rating: { '$numberDouble': '7.1' },
      votes: { '$numberInt': '448' },
      id: { '$numberInt': '488' }
    },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: {
        rating: { '$numberDouble': '3.7' },
        numReviews: { '$numberInt': '53' },
        meter: { '$numberInt': '67' }
      },
      lastUpdated: { '$date': { '$numberLong': '1430161595000' } }
    }
  }
]