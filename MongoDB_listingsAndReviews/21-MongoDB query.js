//---------------------------------------------------------------------------------------------------------------------
// 21.)Retrieve all documents with name, address, reviewer_name, review_scores_ratingin the listingsAndReviewscollection
//that have a number_of_reviews field is equal to 0.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
    {
        number_of_reviews: { $eq: { $numberInt: "0" } }
    },
    {
        name: 1,
        address: 1,
        reviewer_name: 1,
        review_scores_rating: 1,
        _id: 0,
        number_of_reviews: 1
    }
).limit(2).pretty()

db.denem4.find({ "number_of_reviews": { $eq: { $numberInt: "51" } } }).pretty()

/*
Atlas atlas-h7u0ph-shard-0 [primary] denem> db.denem4.aggregate([
...     { $match: { "number_of_reviews": { $exists: true } } },
...     { $project: { number_of_reviews: 1, _id: 0 } }
... ]).pretty()
...
[
  { number_of_reviews: { '$numberInt': '51' } },
  { number_of_reviews: { '$numberInt': '0' } },
  { number_of_reviews: { '$numberInt': '96' } },
  { number_of_reviews: { '$numberInt': '1' } },
  { number_of_reviews: { '$numberInt': '0' } },
  { number_of_reviews: { '$numberInt': '70' } },
  { number_of_reviews: { '$numberInt': '70' } },
  { number_of_reviews: { '$numberInt': '1' } },
  { number_of_reviews: { '$numberInt': '1' } },
  { number_of_reviews: { '$numberInt': '0' } },
  { number_of_reviews: { '$numberInt': '5' } },
  { number_of_reviews: { '$numberInt': '0' } },
  { number_of_reviews: { '$numberInt': '3' } },
  { number_of_reviews: { '$numberInt': '0' } },
  { number_of_reviews: { '$numberInt': '0' } },
  { number_of_reviews: { '$numberInt': '0' } },
  { number_of_reviews: { '$numberInt': '0' } },
  { number_of_reviews: { '$numberInt': '178' } },
  { number_of_reviews: { '$numberInt': '81' } },
  { number_of_reviews: { '$numberInt': '64' } }
]
*/


// OUTPUT:
[
  {
    name: 'Horto flat with small garden',
    number_of_reviews: { '$numberInt': '0' },
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
  },
  {
    name: 'Apt Linda Vista Lagoa - Rio',
    number_of_reviews: { '$numberInt': '0' },
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
  }
]