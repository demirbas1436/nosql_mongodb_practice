//---------------------------------------------------------------------------------------------------------------------
// 4.) Retrieve all movies from the 'movies' collection that were directed by "William K.L. Dickson" and include
//complete information for each movie.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find({ directors: "William K.L. Dickson" })
db.denem8.countDocuments({ directors: "William K.L. Dickson" })
// 3


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
    _id: ObjectId('573a139ef29313caabcfe4f1'),
    plot: 'The sound has been found in the form of an old Edisonian recording cylinder. The cylinder was repaired, then Walter Murch ACE MPSE synced the film to the correct music in (I believe) 2002. Total running time is approximately 17 seconds.',
    genres: [ 'Short' ],
    runtime: 1,
    title: 'Dickson Experimental Sound Film',
    countries: [ 'USA' ],
    fullplot: 'The earliest extant sound film. William K.L. Dickson stands in the background next to a huge sound pickup horn connected to a Thomas Edison phonograph recorder. As he plays a violin, two men dance in the foreground. This film was made to demonstrate a new Thomas Edison machine, the Kinetophone. These machines were Kinetoscope peepshow viewers mated with Thomas Edison wax cylinder phonographs. But the Kinetophone never caught on and this film was never released. The film still exists, but the phonograph soundtrack has been lost.',
    languages: [ 'English' ],
    cast: [ 'William K.L. Dickson' ],
    directors: [ 'William K.L. Dickson' ],
    rated: 'NOT RATED',
    awards: {
      wins: { '$numberInt': '1' },
      nominations: { '$numberInt': '0' },
      text: '1 win.'
    },
    lastupdated: '2015-06-16 00:30:38.357000000',
    year: { '$numberInt': '1894' },
    imdb: {
      rating: { '$numberDouble': '6.8' },
      votes: { '$numberInt': '1101' },
      id: { '$numberInt': '177707' }
    },
    type: 'movie',
    tomatoes: {
      viewer: {
        rating: { '$numberDouble': '3.8' },
        numReviews: { '$numberInt': '1794' },
        meter: { '$numberInt': '84' }
      },
      dvd: { '$date': { '$numberLong': '990489600000' } },
      production: 'Sony Pictures Home Entertainment',
      lastUpdated: { '$date': { '$numberLong': '1440353761000' } }
    }
  },
  {
    _id: ObjectId('573a13a3f29313caabd0d5a4'),
    plot: 'An athlete swings Indian clubs.',
    genres: [ 'Documentary', 'Short' ],
    runtime: 1,
    title: 'Newark Athlete',
    num_mflix_comments: { '$numberInt': '3' },
    countries: [ 'USA' ],
    fullplot: 'A young man stands before the camera holding a club in each hand, horizontal to the ground. He raises the heads of the two clubs in unison, by rotating the clubs without lifting his arms. The film then shows the same footage over again, at different speeds.',
    languages: [ 'English' ],
    directors: [ 'William K.L. Dickson' ],
    rated: 'NOT RATED',
    awards: {
      wins: { '$numberInt': '1' },
      nominations: { '$numberInt': '0' },
      text: '1 win.'
    },
    lastupdated: '2015-08-03 00:57:26.680000000',
    year: { '$numberInt': '1891' },
    imdb: {
      rating: { '$numberDouble': '4.9' },
      votes: { '$numberInt': '827' },
      id: { '$numberInt': '241763' }
    },
    type: 'movie',
    tomatoes: { lastUpdated: { '$date': { '$numberLong': '1348963200000' } } }
  }
]