//---------------------------------------------------------------------------------------------------------------------
// 12.)Find all movies with title, languages, released, directors, writers, awards, year, genres, runtime, cast,
//countries from the 'movies' collection in MongoDB with cast including "Charles Kayser".
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find(
    {
      "cast": "Charles Kayser"
    },
    {
      "title": 1,
      "languages": 1,
      "released": 1,
      "directors": 1,
      "writers": 1,
      "awards": 1,
      "year": 1,
      "genres": 1,
      "runtime": 1,
      "cast": 1,
      "countries": 1
    })


// OUTPUT:
[
  {
    _id: ObjectId('573a1390f29313caabcd4135'),
    genres: [ 'Short' ],
    runtime: 1,
    cast: [ 'Charles Kayser', 'John Ott' ],
    title: 'Blacksmith Scene',
    countries: [ 'USA' ],
    released: { '$date': { '$numberLong': '-2418768000000' } },
    directors: [ 'William K.L. Dickson' ],
    awards: {
      wins: { '$numberInt': '1' },
      nominations: { '$numberInt': '0' },
      text: '1 win.'
    },
    year: { '$numberInt': '1893' }
  }
]