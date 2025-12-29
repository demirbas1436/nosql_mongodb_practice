//---------------------------------------------------------------------------------------------------------------------
// 20.)Find the listings with listing_url, name, address and amenities,price,review scores in the listingsAndReviews
//collection that have the lowest nightly prices.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
        { "price": { "$exists": true } },
        { "listing_url": 1, "name": 1, "address": 1, "amenities": 1, "price": 1, "review_scores": 1 }
).sort({ "price": 1 }).limit(1)


// OUTPUT:
[
  {
    _id: '14758068',
    listing_url: 'https://www.airbnb.com/rooms/14758068',
    name: 'Room on spacious appartment',
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Elevator',
      'Free street parking',
      'Washer',
      'Hangers',
      'Laptop friendly workspace',
      'translation missing: en.hosting_amenity_49',
      'translation missing: en.hosting_amenity_50',
      'Private entrance',
      'Hot water',
      'Microwave',
      'Coffee maker',
      'Refrigerator',
      'Dishwasher',
      'Dishes and silverware',
      'Cooking basics',
      'Oven',
      'Stove',
      'Patio or balcony',
      'Garden or backyard',
      'Long term stays allowed',
      'Wide hallway clearance',
      'Wide doorway',
      'Flat path to front door',
      'Well-lit path to entrance',
      'Disabled parking spot',
      'Wide doorway',
      'Wide clearance to bed',
      'Accessible-height bed',
      'Step-free access',
      'Wide doorway',
      'Accessible-height toilet',
      'Wide entryway',
      'Host greets you',
      'Handheld shower head'
    ],
    price: Decimal128('NumberDecimal("9.00")'),
    address: {
      street: 'Valbom, Porto, Portugal',
      suburb: '',
      government_area: 'Gondomar (São Cosme), Valbom e Jovim',
      market: 'Porto',
      country: 'Portugal',
      country_code: 'PT',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-8.557' },
          { '$numberDouble': '41.14586' }
        ],
        is_location_exact: true
      }
    },
    review_scores: {
      review_scores_accuracy: { '$numberInt': '8' },
      review_scores_cleanliness: { '$numberInt': '10' },
      review_scores_checkin: { '$numberInt': '10' },
      review_scores_communication: { '$numberInt': '10' },
      review_scores_location: { '$numberInt': '8' },
      review_scores_value: { '$numberInt': '10' },
      review_scores_rating: 100
    }
  }
]