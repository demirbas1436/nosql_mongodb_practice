//---------------------------------------------------------------------------------------------------------------------
// 45.)Find all listings with listing_url, name, address in the listingsAndReviews collection that have a suburb
//of "Lagoa".
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
    {
        "address.suburb": "Lagoa"
    },
    {
        listing_url: 1, name: 1, address: 1
    }
).limit(2).pretty()


// OUTPUT:
[
  {
    _id: '10030955',
    listing_url: 'https://www.airbnb.com/rooms/10030955',
    name: 'Apt Linda Vista Lagoa - Rio',
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
    _id: '28955950',
    listing_url: 'https://www.airbnb.com/rooms/28955950',
    name: 'Maravilhoso apartamento pra passar férias',
    address: {
      street: 'Lagoa, Rio de Janeiro, Brazil',
      suburb: 'Lagoa',
      government_area: 'Lagoa',
      market: 'Rio De Janeiro',
      country: 'Brazil',
      country_code: 'BR',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-43.20198128494685' },
          { '$numberDouble': '-22.961310128349428' }
        ],
        is_location_exact: true
      }
    }
  }
]