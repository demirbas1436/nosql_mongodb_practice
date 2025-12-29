//---------------------------------------------------------------------------------------------------------------------
// 50.)Find all listings with listing_url, name, address, host_picture_url in the listingsAndReviews collection that
//have a host with a picture url.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.aggregate([
   {
     $match: {
        "host.host_picture_url": { $exists: true, $ne: null }
     }
   },
   {
     $project: {
        listing_url: 1,
        name: 1,
        address: 1,
        "host.host_picture_url": 1
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
    host: {
      host_picture_url: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_x_medium'
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
    _id: '10009999',
    listing_url: 'https://www.airbnb.com/rooms/10009999',
    name: 'Horto flat with small garden',
    host: {
      host_picture_url: 'https://a0.muscache.com/im/pictures/9681e3cc-4af1-4046-b294-2881dffb4ff8.jpg?aki_policy=profile_x_medium'
    },
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
    }
  }
]