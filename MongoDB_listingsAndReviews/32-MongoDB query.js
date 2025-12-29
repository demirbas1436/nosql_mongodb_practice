//---------------------------------------------------------------------------------------------------------------------
// 32.)Retrieve all documents with listing_url, name, amenity, host in the listingsAndReviews collection where the
//amenities array contains both "TV" and "Wifi".
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find( { amenities: { $all: ["TV", "Wifi"] } }, { listing_url: 1, name: 1, amenity: 1, host: 1 }).limit(2).pretty()

// $all, bir array (dizi) alanının, belirtilen tüm değerleri içerip içermediğini kontrol eder.
// buradaki anlamı "amenities alanı bir dizi olsun ve bu dizinin içinde hem "TV" hem de "Wifi" mutlaka bulunsun."
// $in ile farkı
//
// Karıştırılan önemli bir nokta:
//      -----------------------
//      | $in: ["TV", "Wifi"] |
//      -----------------------
//
//   -> en az biri varsa yeterlidir.
//      ------------------------
//      | $all: ["TV", "Wifi"] |
//      ------------------------
//
//   -> ikisinin de olması şarttır.

db.denem4.find(
  {
    $and: [
      { amenities: "TV" },
      { amenities: "Wifi" }
    ]
  },
  {
    listing_url: 1,
    name: 1,
    amenities: 1,
    host: 1
  }
)

db.denem4.find(
  {
    amenities: "TV",
    amenities: "Wifi"
  },
  {
    listing_url: 1,
    name: 1,
    amenities: 1,
    host: 1
  }
)


db.denem4.find(
  {
    $expr: {
      $setIsSubset: [ // -> ["TV","Wifi"], amenities dizisinin alt kümesi mi?
        ["TV", "Wifi"],
        "$amenities"
      ]
    }
  },
  {
    listing_url: 1,
    name: 1,
    amenities: 1,
    host: 1
  }
)

// $setIsSubset KULLANIMI
//   --------------------------
//   | $setIsSubset: [ A, B ] |
//   --------------------------
// -> A kümesi, B kümesinin alt kümesi mi?
// -> Yani A’daki her eleman B’nin içinde var mı?
//
//    Eğer hepsi varsa → true, yoksa → false.
// Nerede kullanılır?
//
// * $expr içinde kullanılır
// * Aggregation veya find sorgularında
// * Dinamik array karşılaştırmaları için


// OUTPUT:
[
  {
    _id: '10006546',
    listing_url: 'https://www.airbnb.com/rooms/10006546',
    name: 'Ribeira Charming Duplex',
    host: {
      host_id: '51399391',
      host_url: 'https://www.airbnb.com/users/show/51399391',
      host_name: 'Ana&Gonçalo',
      host_location: 'Porto, Porto District, Portugal',
      host_about: 'Gostamos de passear, de viajar, de conhecer pessoas e locais novos, gostamos de desporto e animais! Vivemos na cidade mais linda do mundo!!!',
      host_response_time: 'within an hour',
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: '',
      host_response_rate: { '$numberInt': '100' },
      host_is_superhost: false,
      host_has_profile_pic: true,
      host_identity_verified: true,
      host_listings_count: { '$numberInt': '3' },
      host_total_listings_count: { '$numberInt': '3' },
      host_verifications: [
        'email',
        'phone',
        'reviews',
        'jumio',
        'offline_government_id',
        'government_id'
      ]
    }
  },
  {
    _id: '1001265',
    listing_url: 'https://www.airbnb.com/rooms/1001265',
    name: 'Ocean View Waikiki Marina w/prkg',
    host: {
      host_id: '5448114',
      host_url: 'https://www.airbnb.com/users/show/5448114',
      host_name: 'David',
      host_location: 'Honolulu, Hawaii, United States',
      host_about: 'I have 30 years of experience in the Waikiki Real Estate Market. We specialize in local sales and property management. Our goal is service and aloha. We want to help people enjoy Hawaii.',
      host_response_time: 'within an hour',
      host_thumbnail_url: 'https://a0.muscache.com/im/users/5448114/profile_pic/1363202219/original.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/users/5448114/profile_pic/1363202219/original.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: 'Waikiki',
      host_response_rate: { '$numberInt': '98' },
      host_is_superhost: false,
      host_has_profile_pic: true,
      host_identity_verified: false,
      host_listings_count: { '$numberInt': '18' },
      host_total_listings_count: { '$numberInt': '18' },
      host_verifications: [ 'email', 'phone', 'reviews', 'kba' ]
    }
  }