//---------------------------------------------------------------------------------------------------------------------
// 13.)Retrieve all movies with title, languages, released, directors, writers, countries from the 'movies' collection
//in MongoDB that released on May 9, 1893.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find(
    {
      released: ISODate("1893-05-09T00:00:00.000Z")
    },
    {
      title: 1,
      languages: 1,
      released: 1,
      directors: 1,
      writers: 1,
      countries: 1
    }).limit(1).pretty()


/*
TIP DONUSUMU

var bulk = [];
db.denem8.find().forEach(function(doc) {
  if (doc.released && doc.released.$date && doc.released.$date.$numberLong) {
    var millis = parseInt(doc.released.$date.$numberLong);
    bulk.push({
      updateOne: {
        filter: { _id: doc._id },
        update: { $set: { released: new Date(millis) } }
      }
    });
  }
  if (bulk.length === 1000) {
    db.denem8.bulkWrite(bulk);
    bulk = [];
  }
});
if (bulk.length > 0) {
  db.denem8.bulkWrite(bulk);
}

*/

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