//---------------------------------------------------------------------------------------------------------------------
// 26.)Write a query in MongoDB to find the average IMDb rating for movies with different ratings (e.g., 'PG', 'R', 'G')
//from the 'movies' collection.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.aggregate([
  {
    $group: {
      _id: "$rated",
      averageRating: { $avg: "$imdb.rating" }
    }
  },
  //{
  //  $limit: 5
  //}
])

/*
TIP DONUSUMU

var bulk = [];

db.denem8.find().forEach(function(doc) {
  var r = doc.imdb && doc.imdb.rating;
  if (r && typeof r === "object") {
    var newRating = null;

    if (r.$numberDouble) {
      newRating = parseFloat(r.$numberDouble);
    } else if (r.$numberInt) {
      newRating = parseInt(r.$numberInt, 10);
    }

    if (newRating !== null) {
      bulk.push({
        updateOne: {
          filter: { _id: doc._id },
          update: { $set: { "imdb.rating": newRating } }
        }
      });
    }
  }

  if (bulk.length === 1000) {
    db.denem8.bulkWrite(bulk);
    bulk = [];
  }
});

if (bulk.length > 0) {
  db.denem8.bulkWrite(bulk);
}


{
  acknowledged: true,
  insertedCount: 0,
  insertedIds: {},
  matchedCount: 383,
  modifiedCount: 383,
  deletedCount: 0,
  upsertedCount: 0,
  upsertedIds: {}
}
*/


// OUTPUT:
[
  { _id: 'R', averageRating: 6.4568460982658955 },
  { _id: 'TV-MA', averageRating: 7.364999999999999 },
  { _id: 'TV-PG', averageRating: 6.951315789473684 },
  { _id: 'OPEN', averageRating: 7.2 },
  { _id: 'PG-13', averageRating: 6.405897546276367 },
  { _id: 'UNRATED', averageRating: 6.97190412782956 },
  { _id: 'Approved', averageRating: 7.040000000000001 },
  { _id: 'AO', averageRating: 5.3999999999999995 },
  { _id: 'Not Rated', averageRating: 7.7 },
  { _id: 'NC-17', averageRating: 6.760526315789473 },
  { _id: null, averageRating: 6.82571922334045 },
  { _id: 'PG', averageRating: 6.435456017269293 },
  { _id: 'GP', averageRating: 7.040909090909091 },
  { _id: 'G', averageRating: 6.6280922431865825 },
  { _id: 'X', averageRating: 6.5552631578947365 },
  { _id: 'TV-Y7', averageRating: 6.033333333333334 },
  { _id: 'NOT RATED', averageRating: 7.0212703101920235 },
  { _id: 'PASSED', averageRating: 7.305494505494505 },
  { _id: 'TV-14', averageRating: 6.886516853932584 },
  { _id: 'M', averageRating: 7.013513513513513 }
  { _id: 'TV-G', averageRating: 6.4576271186440675 },
  { _id: 'APPROVED', averageRating: 7.167369901547117 }
]