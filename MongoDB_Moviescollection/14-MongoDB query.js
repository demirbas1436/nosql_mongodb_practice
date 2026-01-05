//---------------------------------------------------------------------------------------------------------------------
// 14.)Retrieve all movies with title, languages, released, directors, writers, countries from the 'movies' collection
//in MongoDB that have a word "scene" in the title.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find(
    {
      title: { $regex: /scene/i } //->$options: "i", kelime başı=/^scene/i, tam eşleşme=/\bscene\b/i
    },
    {
      title: 1,
      languages: 1,
      released: 1,
      directors: 1,
      writers: 1,
      countries: 1 }
    ).limit(1).pretty()


db.denem8.find(
  {
    title: { $regex: "scene", $options: "i" }
  },
  {
    title: 1,
    languages: 1,
    released: 1,
    directors: 1,
    writers: 1,
    countries: 1
  }
).limit(1).pretty()


// OUTPUT:
[
  {
    _id: ObjectId('573a1390f29313caabcd4135'),
    title: 'Blacksmith Scene',
    countries: [ 'USA' ],
    released: ISODate('1893-05-09T00:00:00.000Z'),
    directors: [ 'William K.L. Dickson' ]
  }
]