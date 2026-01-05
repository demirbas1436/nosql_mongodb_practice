//---------------------------------------------------------------------------------------------------------------------
// 11.)Find all movies with title, languages, released, directors, writers, awards, year, genres, runtime, cast,
//countries from the 'movies' collection in MongoDB that have at least one nomination.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find(
    {
      "awards.nominations": { $gt: { $numberInt: "0" } }
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
    }).limit(1).pretty()



// OUTPUT:
[
  {
    _id: ObjectId('573a1390f29313caabcd5967'),
    genres: [ 'Action', 'Adventure', 'Crime' ],
    runtime: 399,
    cast: [ 'Musidora', 'èdouard Mathè', 'Marcel Lèvesque', 'Jean Aymè' ],
    title: 'Les vampires',
    languages: [ 'French' ],
    released: { '$date': { '$numberLong': '-1675900800000' } },
    directors: [ 'Louis Feuillade' ],
    writers: [ 'Louis Feuillade' ],
    awards: {
      wins: { '$numberInt': '0' },
      nominations: { '$numberInt': '1' },
      text: '1 nomination.'
    },
    year: { '$numberInt': '1915' },
    countries: [ 'France' ]
  }
]