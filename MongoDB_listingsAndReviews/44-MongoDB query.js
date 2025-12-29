//---------------------------------------------------------------------------------------------------------------------
// 44.)Find all listings with listing_url, name, address, availability_30 in the istingsAndReviews collection
//that have an availability of at least 30 days.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
        {
            "availability.availability_30": { $gte: 30 }
        },
        {
            listing_url: 1,
            name: 1,
            address: 1,
            "availability.availability_30": 1
        }).limit(2).pretty()

// OUTPUT:
[
  {
    _id: '10057826',
    listing_url: 'https://www.airbnb.com/rooms/10057826',
    name: 'Deluxe Loft Suite',
    address: {
      street: 'Brooklyn, NY, United States',
      suburb: 'Greenpoint',
      government_area: 'Greenpoint',
      market: 'New York',
      country: 'United States',
      country_code: 'US',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-73.94472' },
          { '$numberDouble': '40.72778' }
        ],
        is_location_exact: true
      }
    },
    availability: { availability_30: 30 }
  },
  {
    _id: '10082307',
    listing_url: 'https://www.airbnb.com/rooms/10082307',
    name: 'Double Room en-suite (307)',
    address: {
      street: 'Hong Kong, Kowloon, Hong Kong',
      suburb: 'Yau Tsim Mong',
      government_area: 'Yau Tsim Mong',
      market: 'Hong Kong',
      country: 'Hong Kong',
      country_code: 'HK',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '114.17158' },
          { '$numberDouble': '22.30469' }
        ],
        is_location_exact: true
      }
    },
    availability: { availability_30: 30 }
  }
]