//---------------------------------------------------------------------------------------------------------------------
// 19.)Find the listings with listing_url, name, address and amenities, price, review scores in the listingsAndReviews
//collection that have the highest nightly prices.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
        { "price": { "$exists": true } },
        { "listing_url": 1, "name": 1, "address": 1, "amenities": 1, "price": 1, "review_scores": 1 }
).sort({ "price": -1 }).limit(1)


// OUTPUT:
[
  {
    _id: '20275354',
    listing_url: 'https://www.airbnb.com/rooms/20275354',
    name: 'İstanbul un kalbi sisli. Center of istanbul sisli',
    amenities: [
      'TV',
      'Cable TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Breakfast',
      'Elevator',
      'Heating',
      'Washer',
      'Essentials',
      'Shampoo',
      'Hangers',
      'Hair dryer',
      'Iron',
      'Laptop friendly workspace'
    ],
    price: Decimal128('NumberDecimal("48842.00")'),
    address: {
      street: 'Şişli, İstanbul, Turkey',
      suburb: 'Şişli',
      government_area: 'Sisli',
      market: 'Istanbul',
      country: 'Turkey',
      country_code: 'TR',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '28.98111' },
          { '$numberDouble': '41.05465' }
        ],
        is_location_exact: false
      }
    },
    review_scores: {}
  }
]