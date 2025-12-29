//---------------------------------------------------------------------------------------------------------------------
// 48.)Write a mongodb query to find the listing_url, name, address, host_verifications, and size of host_verification
//under the host subdocument in the listingsAndReviews collection.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.aggregate([
  {
    $project: {
      "listing_url": 1,
      "name": 1,
      "address": 1,
      "host_verifications": "$host.host_verifications",
      "host_verifications_count": { $size: "$host.host_verifications" }
    }
  },
  {
    $limit: 2
  }
])


// OUTPUT:
[
  {
    _id: '10006546',
    listing_url: 'https://www.airbnb.com/rooms/10006546',
    name: 'Ribeira Charming Duplex',
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
    },
    host_verifications: [
      'email',
      'phone',
      'reviews',
      'jumio',
      'offline_government_id',
      'government_id'
    ],
    host_verifications_count: 6
  },
  {
    _id: '10009999',
    listing_url: 'https://www.airbnb.com/rooms/10009999',
    name: 'Horto flat with small garden',
    address: {
      street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
      suburb: 'Jardim Botânico',
      government_area: 'Jardim Botânico',
      market: 'Rio De Janeiro',
      country: 'Brazil',
      country_code: 'BR',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-43.23074991429229' },
          { '$numberDouble': '-22.966253551739655' }
        ],
        is_location_exact: true
      }
    },
    host_verifications: [ 'email', 'phone', 'facebook' ],
    host_verifications_count: 3
  }
]