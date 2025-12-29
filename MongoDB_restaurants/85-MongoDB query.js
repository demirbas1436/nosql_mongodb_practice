//---------------------------------------------------------------------------------------------------------------------
// 85.)Write a MongoDB query to find the top 5 restaurants with the highest average score for each cuisine type,
//along with their average scores.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([ { $unwind: "$grades"},
                      { $group: { _id: { cuisine: "$cuisine", restaurant_id: "$restaurant_id" }, avgScore: { $avg: "$grades.score" } } },
                      { $sort: { "_id.cuisine": 1, avgScore: -1 } },
                      { $group: { _id: "$_id.cuisine", topRestaurants: { $push: { restaurant_id: "$_id.restaurant_id", avgScore: "$avgScore" } } } },
                      { $project: { _id: 0, cuisine: "$_id", topRestaurants: { $slice: [ "$topRestaurants", 5 ] } } }
                    ])



// OUTPUT:

 [
  {
    cuisine: 'Donuts',
    topRestaurants: [
      { restaurant_id: '40846477', avgScore: 19.6 },
      { restaurant_id: '40378035', avgScore: 16.4 },
      { restaurant_id: '40874108', avgScore: 15.4 },
      { restaurant_id: '40883049', avgScore: 12.2 },
      { restaurant_id: '40365525', avgScore: 11.5 }
    ]
  },
  {
    cuisine: 'American ',
    topRestaurants: [
      { restaurant_id: '40756344', avgScore: 36 },
      { restaurant_id: '40372466', avgScore: 33.666666666666664 },
      { restaurant_id: '40387237', avgScore: 32.6 },
      { restaurant_id: '40624470', avgScore: 30.6 },
      { restaurant_id: '40785901', avgScore: 29.833333333333332 }
    ]
  },
  {
    cuisine: 'Middle Eastern',
    topRestaurants: [
      { restaurant_id: '40563475', avgScore: 19.4 },
      { restaurant_id: '40785023', avgScore: 17.166666666666668 },
      { restaurant_id: '40560851', avgScore: 12.5 },
      { restaurant_id: '40816997', avgScore: 12.166666666666666 },
      { restaurant_id: '40888097', avgScore: 11.333333333333334 }
    ]
  },
  {
    cuisine: 'CafÃ©/Coffee/Tea',
    topRestaurants: [ { restaurant_id: '40565492', avgScore: 13.25 } ]
  }
]