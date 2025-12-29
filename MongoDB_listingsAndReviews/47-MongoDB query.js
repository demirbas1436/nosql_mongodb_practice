//---------------------------------------------------------------------------------------------------------------------
// 47.)Find all listings with listing_url, name, address, host in the listingsAndReviews collection that have a host
//who has a profile pic and has been identity verified.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
  {
    "host.host_has_profile_pic": true,
    "host.host_identity_verified": true
  },
  {
    listing_url: 1,
    name: 1,
    address: 1,
    host: 1
  }
).limit(2).pretty()


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
    },
    address: {
      street: 'Porto, Porto, Portugal',
      suburb: '',
      government_area: 'Cedofeita, Ildefonso, Sé, Miragaia, Nicolau, Vitória',
      market: 'Porto',
      country: 'Portugal',
      country_code: 'PT',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-8.61308' },
          { '$numberDouble': '41.1413' }
        ],
        is_location_exact: false
      }
    }
  },
  {
    _id: '10021707',
    listing_url: 'https://www.airbnb.com/rooms/10021707',
    name: 'Private Room in Bushwick',
    host: {
      host_id: '11275734',
      host_url: 'https://www.airbnb.com/users/show/11275734',
      host_name: 'Josh',
      host_location: 'New York, New York, United States',
      host_about: '',
      host_thumbnail_url: 'https://a0.muscache.com/im/users/11275734/profile_pic/1405792127/original.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/users/11275734/profile_pic/1405792127/original.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: 'Bushwick',
      host_is_superhost: false,
      host_has_profile_pic: true,
      host_identity_verified: true,
      host_listings_count: { '$numberInt': '1' },
      host_total_listings_count: { '$numberInt': '1' },
      host_verifications: [ 'email', 'phone', 'reviews', 'kba' ]
    },
    address: {
      street: 'Brooklyn, NY, United States',
      suburb: 'Brooklyn',
      government_area: 'Bushwick',
      market: 'New York',
      country: 'United States',
      country_code: 'US',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-73.93615' },
          { '$numberDouble': '40.69791' }
        ],
        is_location_exact: true
      }
    }
  }
]