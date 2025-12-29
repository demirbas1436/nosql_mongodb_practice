//---------------------------------------------------------------------------------------------------------------------
// 6.)Write a MongoDB query to check whether the host have a profile picture in the first record
//in the listingsAndReviews collection.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.findOne( {},  {"host.host_has_profile_pic": 1})

/*
Atlas atlas-h7u0ph-shard-0 [primary] denem> db.denem4.find( {},  {"host.host_has_profile_pic": 1})
[
  { _id: '10006546', host: { host_has_profile_pic: true } },
  { _id: '10009999', host: { host_has_profile_pic: true } },
  { _id: '1001265', host: { host_has_profile_pic: true } },
  { _id: '10021707', host: { host_has_profile_pic: true } },
  { _id: '10030955', host: { host_has_profile_pic: true } },
  { _id: '1003530', host: { host_has_profile_pic: true } },
  { _id: '10038496', host: { host_has_profile_pic: true } },
  { _id: '10047964', host: { host_has_profile_pic: true } },
  { _id: '10051164', host: { host_has_profile_pic: true } },
  { _id: '10057447', host: { host_has_profile_pic: true } },
  { _id: '10057826', host: { host_has_profile_pic: true } },
  { _id: '10059244', host: { host_has_profile_pic: true } },
  { _id: '10059872', host: { host_has_profile_pic: true } },
  { _id: '10066928', host: { host_has_profile_pic: true } },
  { _id: '10069642', host: { host_has_profile_pic: true } },
  { _id: '10082307', host: { host_has_profile_pic: true } },
  { _id: '10082422', host: { host_has_profile_pic: true } },
  { _id: '10083468', host: { host_has_profile_pic: true } },
  { _id: '10084023', host: { host_has_profile_pic: true } },
  { _id: '10091713', host: { host_has_profile_pic: true } }
]
*/
/*
db.denem4.find(
  { "review.picture_url": { $exists: true, $ne: null } },
  { "review.picture_url": 1 }
).limit(1).pretty()

db.denem4.find(
  { "images.picture_url": { $exists: false } },
  { _id: 1 }
)
*/

// OUTPUT:

{ _id: '10006546', host: { host_has_profile_pic: true } }
