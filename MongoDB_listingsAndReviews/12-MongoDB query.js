//---------------------------------------------------------------------------------------------------------------------
// 12.)Find all the listings in the listingsAndReviews collection that are located in Brazil and have a review score
//rating of at least 9. Return name, address, and review_scores_rating.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.updateMany(
  { "review_scores.review_scores_rating": { $type: "object" } },
  [
    {
      $set: {
        "review_scores.review_scores_rating": {
          $toInt: {
            $first: {
              $map: {
                input: { $objectToArray: "$review_scores.review_scores_rating" },
                as: "f",
                in: "$$f.v"
              }
            }
          }
        }
      }
    }
  ]
)
/*
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 4081,
  modifiedCount: 4081,
  upsertedCount: 0
}
*/


db.denem4.find(
    {
        "address.country": "Brazil",
        "review_scores.review_scores_rating": { $gte: 9 }
    },
    {
        "name": 1,
        "address": 1,
        "review_scores.review_scores_rating": 1,
        "_id": 0
    }
).sort( {"review_scores.review_scores_rating": -1}).limit(2).pretty()

// OUTPUT:
[
  {
    name: 'Your spot in Copacabana',
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
          { '$numberDouble': '-43.17714541632985' },
          { '$numberDouble': '-22.96270793328072' }
        ],
        is_location_exact: false
      }
    },
    review_scores: { review_scores_rating: 100 }
  },
  {
    name: 'Quarto inteiro na Tijuca',
    address: {
      street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
      suburb: 'Tijuca',
      government_area: 'Tijuca',
      market: 'Rio De Janeiro',
      country: 'Brazil',
      country_code: 'BR',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-43.247421907135774' },
          { '$numberDouble': '-22.936203246553816' }
        ],
        is_location_exact: false
      }
    },
    review_scores: { review_scores_rating: 100 }
  }
]