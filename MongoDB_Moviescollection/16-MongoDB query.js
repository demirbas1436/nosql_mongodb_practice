//---------------------------------------------------------------------------------------------------------------------
// 16.)Retrieve all movies with title, languages, released, year, directors, writers, countries from the 'movies'
//collection in MongoDB that released before the year 1900.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find(
  {
    year: { $lt: { $numberInt: "1900" } },
    type: "movie"
  },
  {
    title: 1,
    languages: 1,
    released: 1,
    year: 1,
    directors: 1,
    writers: 1,
    countries: 1
  }
).limit(2).pretty()



// OUTPUT:
[
  {
    _id: ObjectId('573a1390f29313caabcd4135'),
    title: 'Blacksmith Scene',
    countries: [ 'USA' ],
    released: ISODate('1893-05-09T00:00:00.000Z'),
    directors: [ 'William K.L. Dickson' ],
    year: { '$numberInt': '1893' }
  },
  {
    _id: ObjectId('573a139cf29313caabcf560f'),
    title: 'The Kiss',
    countries: [ 'USA' ],
    directors: [ 'William Heise' ],
    writers: [ 'John J. McNally (play)' ],
    year: { '$numberInt': '1896' }
  }
]