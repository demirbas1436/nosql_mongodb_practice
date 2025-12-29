//---------------------------------------------------------------------------------------------------------------------
// 86.)Write a MongoDB query to find the top 5 restaurants in each borough with the highest number of "A" grades.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([ { $unwind: "$grades" },
                      { $match: { "grades.grade": "A" } },
                      { $group: { _id: {borough: "$borough", restaurant_id: "$restaurant_id" } }, gradeCount: { $sum: 1 } },
                      { $sort: { "_id.borough": 1, gradeCount: -1 } },
                      { $group: { _id: "$_id.borough", topRestaurants: { $push: { restaurant_id: "$_id.restaurant_id", gradeCount: "$gradeCount" } } } },
                      { $project: { _id: 0,  borough: "$_id", topRestaurants: { $slice: ["$topRestaurants", 5] } } }
                    ])




// OUTPUT:
[
  {
    borough: 'Brooklyn',
    topRestaurants: [
      { restaurant_id: '40864834', gradeCount: 7 },
      { restaurant_id: '40513021', gradeCount: 7 },
      { restaurant_id: '40399340', gradeCount: 7 },
      { restaurant_id: '40399986', gradeCount: 7 },
      { restaurant_id: '40711333', gradeCount: 6 }
    ]
  },
  {
    borough: 'Manhattan',
    topRestaurants: [
      { restaurant_id: '40752011', gradeCount: 7 },
      { restaurant_id: '40735660', gradeCount: 7 },
      { restaurant_id: '40761780', gradeCount: 7 },
      { restaurant_id: '40606772', gradeCount: 7 },
      { restaurant_id: '40397159', gradeCount: 7 }
    ]
  },
  {
    borough: 'Queens',
    topRestaurants: [
      { restaurant_id: '40362432', gradeCount: 7 },
      { restaurant_id: '40816235', gradeCount: 7 },
      { restaurant_id: '40868810', gradeCount: 7 },
      { restaurant_id: '40786301', gradeCount: 7 },
      { restaurant_id: '40514492', gradeCount: 7 }
    ]
  },
  {
    borough: 'Bronx',
    topRestaurants: [
      { restaurant_id: '30075445', gradeCount: 8 },
      { restaurant_id: '40369087', gradeCount: 7 },
      { restaurant_id: '40863575', gradeCount: 7 },
      { restaurant_id: '40399778', gradeCount: 7 },
      { restaurant_id: '40738028', gradeCount: 6 }
    ]
  },
  {
    borough: 'Staten Island',
    topRestaurants: [
      { restaurant_id: '40720393', gradeCount: 7 },
      { restaurant_id: '40608702', gradeCount: 6 },
      { restaurant_id: '40369158', gradeCount: 6 },
      { restaurant_id: '40370910', gradeCount: 6 },
      { restaurant_id: '40388571', gradeCount: 5 }
    ]
  }
]
