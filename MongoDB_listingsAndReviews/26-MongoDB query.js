//---------------------------------------------------------------------------------------------------------------------
// 26.)Find all listings with name, address, host in the listingsAndReviews collection that have a host with
//a host_location of "Brazil".
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
        { "host.host_location": "Brazil" },
        { name: 1, address: 1, host: 1 }
).limit(2).pretty()

db.denem4.find(
        { "host.host_location": /Brazil/i },
        { name: 1, address: 1, host: 1 }
).limit(2).pretty()

db.denem4.find(
        { "host.host_location": { $regex: "Brazil", $options: "i" } },
        { name: 1, address: 1, host: 1 }
).limit(2).pretty()

// OUTPUT:
[
  {
    _id: '10324377',
    name: 'Suíte em local tranquilo e seguro',
    host: {
      host_id: '53127432',
      host_url: 'https://www.airbnb.com/users/show/53127432',
      host_name: 'Renato',
      host_location: 'Brazil',
      host_about: '',
      host_response_time: 'within an hour',
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/7425fcc7-1d9b-4a3d-acd2-d05a9756372e.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/pictures/7425fcc7-1d9b-4a3d-acd2-d05a9756372e.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: '',
      host_response_rate: { '$numberInt': '100' },
      host_is_superhost: false,
      host_has_profile_pic: true,
      host_identity_verified: false,
      host_listings_count: { '$numberInt': '7' },
      host_total_listings_count: { '$numberInt': '7' },
      host_verifications: [ 'email', 'phone', 'facebook', 'reviews' ]
    },
    address: {
      street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
      suburb: '',
      government_area: 'Anil',
      market: 'Rio De Janeiro',
      country: 'Brazil',
      country_code: 'BR',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-43.33496705036137' },
          { '$numberDouble': '-22.948365490450556' }
        ],
        is_location_exact: true
      }
    }
  },
  {
    _id: '13344796',
    name: 'Hostel Próximo Parque Olímpico/ Projac BLUE 4',
    host: {
      host_id: '41201909',
      host_url: 'https://www.airbnb.com/users/show/41201909',
      host_name: 'Eduardo',
      host_location: 'Brazil',
      host_about: '',
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/4b415542-f82e-4827-a4e2-8ba596d56055.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/pictures/4b415542-f82e-4827-a4e2-8ba596d56055.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: 'Ipanema',
      host_is_superhost: false,
      host_has_profile_pic: true,
      host_identity_verified: false,
      host_listings_count: { '$numberInt': '12' },
      host_total_listings_count: { '$numberInt': '12' },
      host_verifications: [ 'email', 'phone', 'reviews' ]
    },
    address: {
      street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
      suburb: '',
      government_area: 'Jacarepaguá',
      market: 'Rio De Janeiro',
      country: 'Brazil',
      country_code: 'BR',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-43.406955121069075' },
          { '$numberDouble': '-22.962923492008525' }
        ],
        is_location_exact: false
      }
    }
  }
]