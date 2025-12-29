//---------------------------------------------------------------------------------------------------------------------
// 22.)Write a  MongoDB query to find the restaurant Id, name, and grades for those restaurants
//which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { grades: {
                          $elemMatch: {
                           grade: "A",
                           score: 11,
                           "date.$date": 1374451200000
                         }}},
                { restaurant_id: 1, name: 1, grades: 1, _id: 0 })

/*
obj = db.denem2.findOne({}, { grades: 1 });
obj.grades[0].date;
typeof obj.grades[0].date;
-----------
|->object |
-----------
*/
// OUTPUT:

[
  {
    grades: [
      { date: { '$date': 1409961600000 }, grade: 'A', score: 2 },
      { date: { '$date': 1374451200000 }, grade: 'A', score: 11 },
      { date: { '$date': 1343692800000 }, grade: 'A', score: 12 },
      { date: { '$date': 1325116800000 }, grade: 'A', score: 12 }
    ],
    name: 'Dj Reynolds Pub And Restaurant',
    restaurant_id: '30191841'
  },
  {
    grades: [
      { date: { '$date': 1418860800000 }, grade: 'A', score: 7 },
      { date: { '$date': 1386720000000 }, grade: 'A', score: 9 },
      { date: { '$date': 1374451200000 }, grade: 'A', score: 11 },
      { date: { '$date': 1362096000000 }, grade: 'C', score: 10 },
      { date: { '$date': 1328486400000 }, grade: 'A', score: 10 }
    ],
    name: 'Burger King',
    restaurant_id: '40370167'
  },
  {
    grades: [
      { date: { '$date': 1394064000000 }, grade: 'A', score: 11 },
      { date: { '$date': 1374451200000 }, grade: 'A', score: 11 },
      { date: { '$date': 1355788800000 }, grade: 'B', score: 26 },
      { date: { '$date': 1337644800000 }, grade: 'A', score: 13 },
      { date: { '$date': 1326067200000 }, grade: 'B', score: 20 }
    ],
    name: 'Burger King',
    restaurant_id: '40763076'
  }
]