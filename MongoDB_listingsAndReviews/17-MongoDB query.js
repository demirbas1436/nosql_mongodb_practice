//---------------------------------------------------------------------------------------------------------------------
// 17.)Find all the listings with listing_url, name, address and review_scores in the listingsAndReviews collection
//that have a "fireplace" amenity and a review score rating of at least 8.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find({
                  "amenities": "Essentials",
                  "review_scores.review_scores_rating": { $gte: 8 }
                },
                {
                  "listing_url": 1,
                  "name": 1,
                  "address": 1,
                  "review_scores": 1,
                  "_id": 0
                }).limit(2).pretty()

// OUTPUT:
[
  {
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
    review_scores: {
      review_scores_accuracy: { '$numberInt': '9' },
      review_scores_cleanliness: { '$numberInt': '9' },
      review_scores_checkin: { '$numberInt': '10' },
      review_scores_communication: { '$numberInt': '10' },
      review_scores_location: { '$numberInt': '10' },
      review_scores_value: { '$numberInt': '9' },
      review_scores_rating: 89
    }
  },
  {
    listing_url: 'https://www.airbnb.com/rooms/1001265',
    name: 'Ocean View Waikiki Marina w/prkg',
    address: {
      street: 'Honolulu, HI, United States',
      suburb: 'Oʻahu',
      government_area: 'Primary Urban Center',
      market: 'Oahu',
      country: 'United States',
      country_code: 'US',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-157.83919' },
          { '$numberDouble': '21.28634' }
        ],
        is_location_exact: true
      }
    },
    review_scores: {
      review_scores_accuracy: { '$numberInt': '9' },
      review_scores_cleanliness: { '$numberInt': '8' },
      review_scores_checkin: { '$numberInt': '9' },
      review_scores_communication: { '$numberInt': '9' },
      review_scores_location: { '$numberInt': '10' },
      review_scores_value: { '$numberInt': '9' },
      review_scores_rating: 84
    }
  }
]