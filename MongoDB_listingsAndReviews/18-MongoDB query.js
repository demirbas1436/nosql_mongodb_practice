//---------------------------------------------------------------------------------------------------------------------
// 18.)Find all the listings with listing_url, name, address and amenities, review scores in the listingsAndReviews
//collection that have a "washer" amenity and are located in either Italy or Spain.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find({
                 "amenities": "Washer",
                 "$or": [
                   { "address.country": "Italy" },
                   { "address.country": "Spain" }
                 ]
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
    listing_url: 'https://www.airbnb.com/rooms/10082422',
    name: 'Nice room in Barcelona Center',
    address: {
      street: 'Barcelona, Catalunya, Spain',
      suburb: 'Eixample',
      government_area: "la Dreta de l'Eixample",
      market: 'Barcelona',
      country: 'Spain',
      country_code: 'ES',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '2.16942' },
          { '$numberDouble': '41.40082' }
        ],
        is_location_exact: true
      }
    },
    review_scores: {}
  },
  {
    listing_url: 'https://www.airbnb.com/rooms/10545725',
    name: 'Cozy bedroom Sagrada Familia',
    address: {
      street: 'Barcelona, Catalunya, Spain',
      suburb: 'Eixample',
      government_area: 'el Fort Pienc',
      market: 'Barcelona',
      country: 'Spain',
      country_code: 'ES',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '2.17963' },
          { '$numberDouble': '41.40087' }
        ],
        is_location_exact: true
      }
    },
    review_scores: {
      review_scores_accuracy: { '$numberInt': '10' },
      review_scores_cleanliness: { '$numberInt': '10' },
      review_scores_checkin: { '$numberInt': '10' },
      review_scores_communication: { '$numberInt': '10' },
      review_scores_location: { '$numberInt': '10' },
      review_scores_value: { '$numberInt': '10' },
      review_scores_rating: 100
    }
  }
]