//---------------------------------------------------------------------------------------------------------------------
// 46.)Find all listings with listing_url, name, address, host in the listingsAndReviews collection that have a host who
//is a superhost and has at least 2 listings.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
  {
    "host.host_is_superhost": true,
    "host.host_total_listings_count": { $gte: { $numberInt: "2" } }
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
    _id: '1003530',
    listing_url: 'https://www.airbnb.com/rooms/1003530',
    name: 'New York City - Upper West Side Apt',
    host: {
      host_id: '454250',
      host_url: 'https://www.airbnb.com/users/show/454250',
      host_name: 'Greta',
      host_location: 'New York, New York, United States',
      host_about: 'By now I have lived longer in the city than the country however I feel equally at home in each. I like to keep one foot in each and help others to do the same!',
      host_response_time: 'within an hour',
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/f1022be4-e72a-4b35-b6d2-3d2736ddaff9.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/pictures/f1022be4-e72a-4b35-b6d2-3d2736ddaff9.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: '',
      host_response_rate: { '$numberInt': '100' },
      host_is_superhost: true,
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
      street: 'New York, NY, United States',
      suburb: 'Manhattan',
      government_area: 'Upper West Side',
      market: 'New York',
      country: 'United States',
      country_code: 'US',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-73.96523' },
          { '$numberDouble': '40.79962' }
        ],
        is_location_exact: false
      }
    }
  },
  {
    _id: '10038496',
    listing_url: 'https://www.airbnb.com/rooms/10038496',
    name: 'Copacabana Apartment Posto 6',
    host: {
      host_id: '51530266',
      host_url: 'https://www.airbnb.com/users/show/51530266',
      host_name: 'Ana Valéria',
      host_location: 'Rio de Janeiro, State of Rio de Janeiro, Brazil',
      host_about: 'Professora de Educação Física formada pela universidade Gama Filho.',
      host_response_time: 'within an hour',
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/8c7bb5fe-7b6d-4d03-a465-aae8971a87a0.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/pictures/8c7bb5fe-7b6d-4d03-a465-aae8971a87a0.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: 'Copacabana',
      host_response_rate: { '$numberInt': '100' },
      host_is_superhost: true,
      host_has_profile_pic: true,
      host_identity_verified: true,
      host_listings_count: { '$numberInt': '2' },
      host_total_listings_count: { '$numberInt': '2' },
      host_verifications: [ 'email', 'phone', 'reviews', 'jumio', 'government_id' ]
    },
    address: {
      street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
      suburb: 'Copacabana',
      government_area: 'Copacabana',
      market: 'Rio De Janeiro',
      country: 'Brazil',
      country_code: 'BR',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-43.190849194463404' },
          { '$numberDouble': '-22.984339360067814' }
        ],
        is_location_exact: false
      }
    }
  }
]