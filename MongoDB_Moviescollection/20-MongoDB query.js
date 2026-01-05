//---------------------------------------------------------------------------------------------------------------------
// 20.)Find all movies with title, languages, released, runtime, directors, writers, countries from the 'movies'
//collection in MongoDB that have a runtime between 60 and 90 minutes.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find(
    {
      runtime: { $gte: 60, $lte: 90 }
    },
    {
      title: 1,
      languages: 1,
      released: 1,
      runtime: 1,
      directors: 1,
      writers: 1,
      countries: 1
    }
).limit(2).pretty()



// OUTPUT:
[
  {
    _id: ObjectId('573a1390f29313caabcd4eaf'),
    runtime: 88,
    title: 'Traffic in Souls',
    languages: [ 'English' ],
    released: ISODate('1913-11-24T00:00:00.000Z'),
    directors: [ 'George Loane Tucker' ],
    countries: [ 'USA' ]
  },
  {
    _id: ObjectId('573a1390f29313caabcd516c'),
    runtime: 65,
    title: 'In the Land of the Head Hunters',
    languages: [ 'English' ],
    released: ISODate('1914-12-07T00:00:00.000Z'),
    directors: [ 'Edward S. Curtis' ],
    writers: [ 'Edward S. Curtis (story)' ],
    countries: [ 'USA' ]
  }
]