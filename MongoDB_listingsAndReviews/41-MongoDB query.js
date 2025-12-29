//---------------------------------------------------------------------------------------------------------------------
// 41.)Find all listings with listing_url, name, address, amenities in the listingsAndReviews collection that have
//a 24-hour check-in amenity and are located in Brazil.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
  {
    "address.country": "Brazil",
    "amenities": "24-hour check-in"
  },
  {
    "listing_url": 1,
    "name": 1,
    "address": 1,
    "amenities": 1
  }
).limit(2).pretty()

// OUTPUT:
[
  {
    _id: '10030955',
    listing_url: 'https://www.airbnb.com/rooms/10030955',
    name: 'Apt Linda Vista Lagoa - Rio',
    amenities: [
      'TV',
      'Cable TV',
      'Internet',
      'Wifi',
      'Air conditioning',
      'Pool',
      'Kitchen',
      'Free parking on premises',
      'Doorman',
      'Gym',
      'Elevator',
      'Buzzer/wireless intercom',
      'Family/kid friendly',
      'Washer',
      'Essentials',
      '24-hour check-in'
    ],
    address: {
      street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
      suburb: 'Lagoa',
      government_area: 'Lagoa',
      market: 'Rio De Janeiro',
      country: 'Brazil',
      country_code: 'BR',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-43.205047082633435' },
          { '$numberDouble': '-22.971950988341874' }
        ],
        is_location_exact: true
      }
    }
  },
  {
    _id: '10116578',
    listing_url: 'https://www.airbnb.com/rooms/10116578',
    name: 'Apartamento zona sul do RJ',
    amenities: [
      'Cable TV',
      'Wifi',
      'Air conditioning',
      'Wheelchair accessible',
      'Kitchen',
      'Free parking on premises',
      'Doorman',
      'Elevator',
      'Buzzer/wireless intercom',
      'Family/kid friendly',
      'Washer',
      '24-hour check-in',
      'Iron'
    ],
    address: {
      street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
      suburb: 'Laranjeiras',
      government_area: 'Laranjeiras',
      market: 'Rio De Janeiro',
      country: 'Brazil',
      country_code: 'BR',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-43.1825954762751' },
          { '$numberDouble': '-22.930541460367934' }
        ],
        is_location_exact: false
      }
    }
  }
]