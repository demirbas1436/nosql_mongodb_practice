//---------------------------------------------------------------------------------------------------------------------
// 23.)Write a MongoDB query to find the restaurant Id, name and grades for those restaurants
//where the 2nd element of grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find(
   {
     "grades.1.grade": "A",
     "grades.1.score": 9,
     "grades.1.date.$date": 1377561600000
   },
   {
     restaurant_id: 1,
     name: 1,
     grades: 1,
     _id: 0
   })


/*
NEDEN BAZI SORGUDA 1 VAR, BAZISINDA YOK?
--------------------------------------------------------------------------------------------------------
| Sorgu tipi	                 |   grades.1 gerekir mi? |	Neden                                      |
|--------------------------------|------------------------|--------------------------------------------|
| Belirli elemanı hedefliyorsan	 |   ✔ EVET	              |  Çünkü tek bir dizin elemanını seçiyorsun  |
| $elemMatch kullanıyorsan	     |   ❌ HAYIR	          |  Çünkü tüm elemanları otomatik tarıyor     |
--------------------------------------------------------------------------------------------------------
*/


// OUTPUT:
[
  {
    grades: [
      { date: { '$date': 1408147200000 }, grade: 'A', score: 12 }, // index 0
      { date: { '$date': 1377561600000 }, grade: 'A', score: 9 },  // index 1
      { date: { '$date': 1348099200000 }, grade: 'A', score: 7 },  // index 2
      { date: { '$date': 1317254400000 }, grade: 'A', score: 10 }  // index 3
    ],
    name: "Sal'S Deli",
    restaurant_id: '40361618'
  },
  {
    grades: [
      { date: { '$date': 1407801600000 }, grade: 'A', score: 11 },
      { date: { '$date': 1377561600000 }, grade: 'A', score: 9 },
      { date: { '$date': 1364947200000 }, grade: 'B', score: 18 },
      { date: { '$date': 1348099200000 }, grade: 'A', score: 12 },
      { date: { '$date': 1313539200000 }, grade: 'A', score: 2 }
    ],
    name: 'China Grill',
    restaurant_id: '40386481'
  },
  {
    grades: [
      { date: { '$date': 1408665600000 }, grade: 'A', score: 12 },
      { date: { '$date': 1377561600000 }, grade: 'A', score: 9 },
      { date: { '$date': 1364860800000 }, grade: 'A', score: 12 }
    ],
    name: 'Housing Works Food',
    restaurant_id: '40727820'
  }
]
Atlas atlas-h7u0ph-shard-0 [primary] denem>