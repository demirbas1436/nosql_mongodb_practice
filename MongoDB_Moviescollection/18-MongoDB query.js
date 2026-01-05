//---------------------------------------------------------------------------------------------------------------------
// 18.)Return all movies with title, languages, plot, released, directors, writers, and countries from the 'movies'
//collection in MongoDB where the word "beer" mentioned in the plot.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find(
    {
      plot: { $regex: /beer/i }
    },
    {
      title: 1,
      languages: 1,
      plot: 1,
      released: 1,
      directors: 1,
      writers: 1,
      countries: 1
    }).limit(2).pretty()


// OUTPUT:
[
  {
    _id: ObjectId('573a1390f29313caabcd4135'),
    plot: 'Three men hammer on an anvil and pass a bottle of beer around.',
    title: 'Blacksmith Scene',
    countries: [ 'USA' ],
    released: ISODate('1893-05-09T00:00:00.000Z'),
    directors: [ 'William K.L. Dickson' ]
  },
  {
    _id: ObjectId('573a1395f29313caabce133b'),
    plot: 'A group of army personnel and nurses attempt a dangerous and arduous trek across the deserts of North Africa during the second world war. The leader of the team dreams of his ice cold beer ...',
    title: 'Ice Cold in Alex',
    languages: [ 'English', 'German' ],
    released: ISODate('1958-10-03T00:00:00.000Z'),
    directors: [ 'J. Lee Thompson' ],
    writers: [
      'Christopher Landon (novel)',
      'T.J. Morrison (screenplay)',
      'Christopher Landon (screenplay)'
    ],
    countries: [ 'UK' ]
  }
]