//---------------------------------------------------------------------------------------------------------------------
// 7.) Write a MongoDB query to check whether the host's identity have been verified in the first record
//in the listingsAndReviews collection.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.findOne( {}, {"host.host_identity_verified": 1} )

/*
Atlas atlas-h7u0ph-shard-0 [primary] denem> db.denem4.find( {}, {"host.host_identity_verified": 1} )
[
  { _id: '10006546', host: { host_identity_verified: true } },
  { _id: '10009999', host: { host_identity_verified: false } },
  { _id: '1001265', host: { host_identity_verified: false } },
  { _id: '10021707', host: { host_identity_verified: true } },
  { _id: '10030955', host: { host_identity_verified: false } },
  { _id: '1003530', host: { host_identity_verified: true } },
  { _id: '10038496', host: { host_identity_verified: true } },
  { _id: '10047964', host: { host_identity_verified: true } },
  { _id: '10051164', host: { host_identity_verified: true } },
  { _id: '10057447', host: { host_identity_verified: false } },
  { _id: '10057826', host: { host_identity_verified: false } },
  { _id: '10059244', host: { host_identity_verified: false } },
  { _id: '10059872', host: { host_identity_verified: false } },
  { _id: '10066928', host: { host_identity_verified: false } },
  { _id: '10069642', host: { host_identity_verified: false } },
  { _id: '10082307', host: { host_identity_verified: false } },
  { _id: '10082422', host: { host_identity_verified: false } },
  { _id: '10083468', host: { host_identity_verified: true } },
  { _id: '10084023', host: { host_identity_verified: true } },
  { _id: '10091713', host: { host_identity_verified: true } }
]
*/

// OUTPUT:
{ _id: '10006546', host: { host_identity_verified: true } }