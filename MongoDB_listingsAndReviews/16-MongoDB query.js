//---------------------------------------------------------------------------------------------------------------------
// 16.)Find the top 10 most reviewed listings with listing_url, name, country, review_scores in
//the listingsAndReviews collection.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.aggregate([
          {
            $group: {
                _id: {
                    listing_url: "$listing_url",
                    name: "$name",
                    country: "$address.country",
                    review_scores: "$review_scores"
                },
                count: { $sum: 1 },
            },
          },
          {
            $sort: { count: -1 },
          },
          {
            $limit: 10,
          },
          {
            $project: {
                _id: 0,
                listing_url: "$_id.listing_url",
                name: "$_id.name",
                country: "$_id.country",
                review_scores: "$_id.review_scores",
                count: 1,
            },
          }])


// OUTPUT:
[
  {
    count: 1,
    listing_url: 'https://www.airbnb.com/rooms/5288332',
    name: 'Ko Olina Ocean View Condo 2BR/2BA',
    country: 'United States',
    review_scores: {
      review_scores_accuracy: { '$numberInt': '10' },
      review_scores_cleanliness: { '$numberInt': '10' },
      review_scores_checkin: { '$numberInt': '10' },
      review_scores_communication: { '$numberInt': '10' },
      review_scores_location: { '$numberInt': '10' },
      review_scores_value: { '$numberInt': '10' },
      review_scores_rating: 99
    }
  },
  {
    count: 1,
    listing_url: 'https://www.airbnb.com/rooms/20834832',
    name: 'Bright charming studio in quiet treelined Brooklyn',
    country: 'United States',
    review_scores: {
      review_scores_accuracy: { '$numberInt': '10' },
      review_scores_cleanliness: { '$numberInt': '10' },
      review_scores_checkin: { '$numberInt': '10' },
      review_scores_communication: { '$numberInt': '10' },
      review_scores_location: { '$numberInt': '10' },
      review_scores_value: { '$numberInt': '9' },
      review_scores_rating: 100
    }
  },
  {
    count: 1,
    listing_url: 'https://www.airbnb.com/rooms/30242109',
    name: 'Super cozy and central with a back garden',
    country: 'Turkey',
    review_scores: {
      review_scores_accuracy: { '$numberInt': '10' },
      review_scores_cleanliness: { '$numberInt': '10' },
      review_scores_checkin: { '$numberInt': '10' },
      review_scores_communication: { '$numberInt': '10' },
      review_scores_location: { '$numberInt': '10' },
      review_scores_value: { '$numberInt': '10' },
      review_scores_rating: 100
    }
  },
  {
    count: 1,
    listing_url: 'https://www.airbnb.com/rooms/7815865',
    name: 'Manhattan Club (1 bedroom/Sleeps 4)',
    country: 'United States',
    review_scores: {
      review_scores_accuracy: { '$numberInt': '10' },
      review_scores_cleanliness: { '$numberInt': '9' },
      review_scores_checkin: { '$numberInt': '10' },
      review_scores_communication: { '$numberInt': '9' },
      review_scores_location: { '$numberInt': '10' },
      review_scores_value: { '$numberInt': '9' },
      review_scores_rating: 100
    }
  },
  {
    count: 1,
    listing_url: 'https://www.airbnb.com/rooms/4573398',
    name: 'Apart(5)-5 minutes walk from Taksim',
    country: 'Turkey',
    review_scores: {
      review_scores_accuracy: { '$numberInt': '9' },
      review_scores_cleanliness: { '$numberInt': '9' },
      review_scores_checkin: { '$numberInt': '10' },
      review_scores_communication: { '$numberInt': '9' },
      review_scores_location: { '$numberInt': '10' },
      review_scores_value: { '$numberInt': '9' },
      review_scores_rating: 88
    }
  },
  {
    count: 1,
    listing_url: 'https://www.airbnb.com/rooms/18908638',
    name: 'Renovated 20min train to enter city 5min to subway',
    country: 'United States',
    review_scores: {
      review_scores_accuracy: { '$numberInt': '10' },
      review_scores_cleanliness: { '$numberInt': '10' },
      review_scores_checkin: { '$numberInt': '10' },
      review_scores_communication: { '$numberInt': '10' },
      review_scores_location: { '$numberInt': '9' },
      review_scores_value: { '$numberInt': '10' },
      review_scores_rating: 97
    }
  },
  {
    count: 1,
    listing_url: 'https://www.airbnb.com/rooms/28453855',
    name: 'Double Room (Whole Sunshine International Hotel)',
    country: 'Hong Kong',
    review_scores: {
      review_scores_accuracy: { '$numberInt': '9' },
      review_scores_cleanliness: { '$numberInt': '10' },
      review_scores_checkin: { '$numberInt': '9' },
      review_scores_communication: { '$numberInt': '8' },
      review_scores_location: { '$numberInt': '10' },
      review_scores_value: { '$numberInt': '9' },
      review_scores_rating: 90
    }
  },
  {
    count: 1,
    listing_url: 'https://www.airbnb.com/rooms/24279661',
    name: 'Stylish & Stunning 2br Apartment Perfectly Located',
    country: 'Canada',
    review_scores: {
      review_scores_accuracy: { '$numberInt': '9' },
      review_scores_cleanliness: { '$numberInt': '10' },
      review_scores_checkin: { '$numberInt': '10' },
      review_scores_communication: { '$numberInt': '10' },
      review_scores_location: { '$numberInt': '9' },
      review_scores_value: { '$numberInt': '9' },
      review_scores_rating: 96
    }
  },
  {
    count: 1,
    listing_url: 'https://www.airbnb.com/rooms/14968004',
    name: 'APTO NA BARRA DA TIJUCA RIO 2',
    country: 'Brazil',
    review_scores: {
      review_scores_accuracy: { '$numberInt': '9' },
      review_scores_cleanliness: { '$numberInt': '10' },
      review_scores_checkin: { '$numberInt': '9' },
      review_scores_communication: { '$numberInt': '10' },
      review_scores_location: { '$numberInt': '7' },
      review_scores_value: { '$numberInt': '8' },
      review_scores_rating: 88
    }
  },
  {
    count: 1,
    listing_url: 'https://www.airbnb.com/rooms/20829122',
    name: 'Habitación  acogedora vacacional',
    country: 'Spain',
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