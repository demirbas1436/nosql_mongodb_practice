//---------------------------------------------------------------------------------------------------------------------
// 60.)Write a MongoDB query to find the number of restaurants that have been graded in each month of the year.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([
                     { $unwind: "$grades" },
                     { $project: { month: { $month: { $toDate: "$grades.date" } },
                                   year: { $year: { $toDate: "$grades.date" } }
                                 }
                     },
                     { $group: { _id: { month: "$month", year: "$year" }, count: { $sum: 1 }}},
                     { $sort: { "_id.year": 1, "_id.month": 1}}
                    ])

//MongoServerError[ConversionFailure]: PlanExecutor error during aggregation :: caused by :: Unsupported conversion
//from object to date in $convert with no onError value



db.denem2.aggregate([
    { $unwind: "$grades" },
    { $project: {
      ts: {
        $getField: {
          field: { $literal: "$date" },  // "$date" kelimesini string olduğunu söylemenin yolu $literal kullanmaktır
          input: "$grades.date"
        }
      }
    }
  },

  { $project: { dateFixed: { $toDate: "$ts" } } },
  { $project: { year: { $year: "$dateFixed" }, month: { $month: "$dateFixed" }}},
  { $group: { _id: { year: "$year", month: "$month" }, count: { $sum: 1 }}},
  { $sort: { "_id.year": 1, "_id.month": 1 } }])


/*
MongoDB'de bir şeyi string olarak ifade etmek istiyorsan (özellikle $ ile başlıyorsa), şöyle yapılmalıdır:

    { $literal: "$date" }
MongoDB’ye şu mesajı verir:
----"Bu bir field expression değil, dümdüz bir kelime — string olarak kullan."----
*/
// OUTPUT:

[
  { _id: { year: 2010, month: 12 }, count: 3 },
  { _id: { year: 2011, month: 1 }, count: 5 },
  { _id: { year: 2011, month: 2 }, count: 20 },
  { _id: { year: 2011, month: 3 }, count: 66 },
  { _id: { year: 2011, month: 4 }, count: 66 },
  { _id: { year: 2011, month: 5 }, count: 132 },
  { _id: { year: 2011, month: 6 }, count: 154 },
  { _id: { year: 2011, month: 7 }, count: 144 },
  { _id: { year: 2011, month: 8 }, count: 179 },
  { _id: { year: 2011, month: 9 }, count: 263 },
  { _id: { year: 2011, month: 10 }, count: 328 },
  { _id: { year: 2011, month: 11 }, count: 379 },
  { _id: { year: 2011, month: 12 }, count: 513 },
  { _id: { year: 2012, month: 1 }, count: 512 },
  { _id: { year: 2012, month: 2 }, count: 502 },
  { _id: { year: 2012, month: 3 }, count: 488 },
  { _id: { year: 2012, month: 4 }, count: 501 },
  { _id: { year: 2012, month: 5 }, count: 551 },
  { _id: { year: 2012, month: 6 }, count: 428 },
  { _id: { year: 2012, month: 7 }, count: 354 }
]