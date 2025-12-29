//---------------------------------------------------------------------------------------------------------------------
// 4.)Retrieve the number of bedrooms in the first record in the listingsAndReviews collection.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find({}, { _id: 0, bedrooms: 1 }).limit(1).pretty()
db.denem4.findOne().bedrooms // -> { '$numberInt': '3' }



// OUTPUT:
[ { bedrooms: { '$numberInt': '3' } } ]