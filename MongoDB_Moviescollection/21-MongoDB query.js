//---------------------------------------------------------------------------------------------------------------------
// 21.)Find all movies with title, languages, released, runtime, directors, writers, countries, imdb from the 'movies'
//collection in MongoDB for the top 5 movies with the highest IMDb ratings.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find(
    {},
    {
      title: 1,
      languages: 1,
      released: 1,
      runtime: 1,
      directors: 1,
      writers: 1,
      countries: 1,
      imdb: 1
}).sort({ imdb: -1 }).limit(5)


// OUTPUT:
[
  {
    _id: ObjectId('573a1397f29313caabce85b6'),
    runtime: 92,
    title: 'The Marathon Family',
    languages: [ 'Serbian' ],
    released: ISODate('1982-03-04T00:00:00.000Z'),
    directors: [ 'Slobodan Sijan' ],
    writers: [ 'Dusan Kovacevic (play)', 'Dusan Kovacevic (screenplay)' ],
    imdb: {
      rating: { '$numberInt': '9' },
      votes: { '$numberInt': '9551' },
      id: { '$numberInt': '84302' }
    },
    countries: [ 'Yugoslavia' ]
  },
  {
    _id: ObjectId('573a1397f29313caabce5e9b'),
    runtime: 669,
    title: 'I, Claudius',
    languages: [ 'English', 'German' ],
    released: ISODate('1977-11-06T00:00:00.000Z'),
    imdb: {
      rating: { '$numberInt': '9' },
      votes: { '$numberInt': '9513' },
      id: { '$numberInt': '74006' }
    },
    countries: [ 'UK' ]
  },
  {
    _id: ObjectId('573a13baf29313caabd521ac'),
    runtime: 24,
    title: 'Death Note',
    languages: [ 'Japanese' ],
    released: ISODate('2006-10-03T00:00:00.000Z'),
    imdb: {
      rating: { '$numberInt': '9' },
      votes: { '$numberInt': '83811' },
      id: { '$numberInt': '877057' }
    },
    countries: [ 'Japan' ]
  },
  {
    _id: ObjectId('573a139af29313caabcef689'),
    runtime: 90,
    title: 'Prerokbe Ognja',
    languages: [ 'English' ],
    released: ISODate('1996-10-02T00:00:00.000Z'),
    directors: [ 'Michael Benson' ],
    writers: [ 'Michael Benson' ],
    imdb: {
      rating: { '$numberInt': '9' },
      votes: { '$numberInt': '61' },
      id: { '$numberInt': '114176' }
    },
    countries: [ 'Slovenia', 'USA' ]
  },
  {
    _id: ObjectId('573a1398f29313caabceb22e'),
    runtime: 136,
    title: 'Heart of a Dog',
    languages: [ 'Russian' ],
    released: ISODate('1988-11-20T00:00:00.000Z'),
    directors: [ 'Vladimir Bortko' ],
    writers: [ 'Natalya Bortko', 'Mikhail A. Bulgakov (story)' ],
    imdb: {
      rating: { '$numberInt': '9' },
      votes: { '$numberInt': '3624' },
      id: { '$numberInt': '96126' }
    },
    countries: [ 'Soviet Union' ]
  }
]