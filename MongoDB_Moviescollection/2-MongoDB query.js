//---------------------------------------------------------------------------------------------------------------------
// 2.)Find all movies with full information from the 'movies' collection that have a runtime greater than 120 minutes.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find({ runtime: { $gt: 120 } }).limit(1).pretty()



// OUTPUT:
[
  {
    _id: ObjectId('573a1390f29313caabcd5293'),
    plot: "Young Pauline is left a lot of money when her wealthy uncle dies. However, her uncle's secretary has been named as her guardian until she marries, at which time she will officially take ...",
    genres: [ 'Action' ],
    runtime: 199,
    cast: [ 'Pearl White', 'Crane Wilbur', 'Paul Panzer', 'Edward Josè' ],
    num_mflix_comments: { '$numberInt': '1' },
    poster: 'https://m.media-amazon.com/images/M/MV5BMzgxODk1Mzk2Ml5BMl5BanBnXkFtZTgwMDg0NzkwMjE@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Perils of Pauline',
    fullplot: `Young Pauline is left a lot of money when her wealthy uncle dies. However, her uncle's secretary has been named as her guardian until she marries, at which time she will officially take possession of her inheritance. Meanwhile, her "guardian" and his confederates constantly come up with schemes to get rid of Pauline so that he can get his hands on the money himself.`,
    languages: [ 'English' ],
    released: { '$date': { '$numberLong': '-1760227200000' } },
    directors: [ 'Louis J. Gasnier', 'Donald MacKenzie' ],
    writers: [
      'Charles W. Goddard (screenplay)',
      'Basil Dickey (screenplay)',
      'Charles W. Goddard (novel)',
      'George B. Seitz',
      'Bertram Millhauser'
    ],
    awards: {
      wins: { '$numberInt': '1' },
      nominations: { '$numberInt': '0' },
      text: '1 win.'
    },
    lastupdated: '2015-09-12 00:01:18.647000000',
    year: { '$numberInt': '1914' },
    imdb: {
      rating: { '$numberDouble': '7.6' },
      votes: { '$numberInt': '744' },
      id: { '$numberInt': '4465' }
    },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: {
        rating: { '$numberDouble': '2.8' },
        numReviews: { '$numberInt': '9' }
      },
      production: 'Pathè Frères',
      lastUpdated: { '$date': { '$numberLong': '1441993579000' } }
    }
  }
]