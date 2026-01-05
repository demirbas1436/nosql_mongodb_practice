//---------------------------------------------------------------------------------------------------------------------
// 15.)Find all movies with title, languages, released, directors, viewer, writers, countries from the 'movies'
//collection in MongoDB that have a viewer rating of at least 3 and less than 4 on Tomatoes.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find(
    {
      'tomatoes.viewer.rating': {
          $gte: {$numberDouble: "3"},
          $lt: {$numberDouble: "4"}
      }
    },
    {
      title: 1,
      languages: 1,
      released: 1,
      directors: 1,
      'tomatoes.viewer': 1,
      writers: 1,
      countries: 1
    }).limit(2).pretty()


// OUTPUT:
[
  {
    _id: ObjectId('573a1390f29313caabcd42e8'),
    title: 'The Great Train Robbery',
    languages: [ 'English' ],
    released: ISODate('1903-12-01T00:00:00.000Z'),
    directors: [ 'Edwin S. Porter' ],
    countries: [ 'USA' ],
    tomatoes: {
      viewer: {
        rating: { '$numberDouble': '3.7' },
        numReviews: { '$numberInt': '2559' },
        meter: { '$numberInt': '75' }
      }
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd4323'),
    title: 'The Land Beyond the Sunset',
    languages: [ 'English' ],
    released: ISODate('1912-10-28T00:00:00.000Z'),
    directors: [ 'Harold M. Shaw' ],
    writers: [ 'Dorothy G. Shore' ],
    countries: [ 'USA' ],
    tomatoes: {
      viewer: {
        rating: { '$numberDouble': '3.7' },
        numReviews: { '$numberInt': '53' },
        meter: { '$numberInt': '67' }
      }
    }
  }
]