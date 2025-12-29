//---------------------------------------------------------------------------------------------------------------------
// 8.)Write a MongoDB query to find how many listings does the host have in the first records
//in the listingsAndReviews collection.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.aggregate([
                        { $match: {} },
                        { $project: { host_listings_count: "$host.host_listings_count" } },
                        { $limit: 1 }
                    ])
db.denem4.find( {}, { "host.host_listings_count": 1 } ).limit(1).pretty()


// OUTPUT:

[ { _id: '10006546', host_listings_count: { '$numberInt': '3' } } ]
