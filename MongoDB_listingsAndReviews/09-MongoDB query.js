//---------------------------------------------------------------------------------------------------------------------
// 9.)Write a MongoDB query to find the street address of the first record in the listingsAndReviews collection.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.findOne( {}, { "address.street": 1 } )


// OUTPUT:
{ _id: '10006546', address: { street: 'Porto, Porto, Portugal' } }
