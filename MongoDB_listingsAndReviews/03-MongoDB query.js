//---------------------------------------------------------------------------------------------------------------------
// 3.)Find the host_name, host_location, host_about of the first record in the listingsAndReviews collection.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find( {}, { _id: 0, "host.host_name": 1, "host.host_location": 1, "host.host_about": 1}).limit(1).pretty()
db.denem4.find().limit(1).forEach( function(doc) { print("Host Name: " + doc.host.host_name);
                                                  print("Host Location: " + doc.host.host_location);
                                                  print("Host About: " + doc.host.host_about);
                                                })




// OUTPUT:

