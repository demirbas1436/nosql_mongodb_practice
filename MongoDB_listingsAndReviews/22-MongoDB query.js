//---------------------------------------------------------------------------------------------------------------------
// 22.)Retrieve all documents with name, address, host, reviewer_name, review_scores_ratingin the listingsAndReviews
//collection where the host_is_superhost field is equal to true.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
        { "host.host_is_superhost": true },
        { name: 1, address: 1, "host.host_id": 1, "host.host_name": 1, "host.host_is_superhost": 1, reviewer_name: 1, review_scores_rating: 1 }
       ).limit(2).pretty()


// OUTPUT:
[
  {
    _id: '1003530',
    name: 'New York City - Upper West Side Apt',
    host: { host_id: '454250', host_name: 'Greta', host_is_superhost: true },
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
    name: 'Copacabana Apartment Posto 6',
    host: {
      host_id: '51530266',
      host_name: 'Ana Valéria',
      host_is_superhost: true
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