//---------------------------------------------------------------------------------------------------------------------
// 5.)Write a MongoDB query to display all the restaurant which is in the borough Bronx.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find( { borough: "Bronx" } )
db.denem2.find( { borough: { $eq: "Bronx" } } ).limit(2).pretty()
db.denem2.find( { borough: { $regex: /Bronx/i }})
db.denem2.find( { borough: { $in: ["Bronx"] } } )
db.denem2.find( { borough: { $not: { $nin: ["Bronx"] } } })
db.denem2.find( { $expr: { $eq: ["$borough", "Bronx"] } })
db.denem2.aggregate( [ { $match: { borough: "Bronx" } } ])

/*
$expr neden kullanılır:
    $expr MongoDB’de bir sorgu içinde belge alanlarını dinamik olarak karşılaştırmak için kullanılır.
   Normal sorgular sadece alan = sabit eşitlik kontrolü yapar.
    ___________________________________________________________
    [db.users.find({ age: 20 })                                ]
    [    Bu işlem age alanını sabit bir değerle karşılaştırır. ]
    ___________________________________________________________
    $expr Ne Zaman Kullanılır?
        Alanları alanlarla kontrol etmek için
            ___________________________________________________________
            [    db.sales.find({                                      ]
            [      $expr: { $gt: ["$todaySales", "$yesterdaySales"] } ]
            [    })                                                   ]
            [ todaySales > yesterdaySales                             ]
            ___________________________________________________________

        Alan üzerinde işlem (toplama, çarpma, uzunluk, tarih hesaplama) yapmak için
            ___________________________________________________________
            [Örneğin ad uzunluğu 5’ten büyük olan kayıtlar:           ]
            [                                                         ]
            [db.users.find({                                          ]
            [  $expr: { $gt: [ { $strLenCP: "$name" }, 5 ] }})        ]
            [                                                         ]
            ___________________________________________________________

        Tarih kontrolü yapmak için
            ___________________________________________________________
            [db.orders.find({                                         ]
            [  $expr: { $gte: ["$orderDate", "$shipDate"] }})         ]
            [                                                         ]
            [orderDate ≥ shipDate                                     ]
            ___________________________________________________________

        Alanın matematiksel hesaplanmış sonucu ile filtreleme
            ___________________________________________________________
            [db.items.find({                                          ]
            [  $expr: { $eq: [ { $add: ["$price", "$tax"] }, 100 ] }})]
            [                                                         ]
            ___________________________________________________________

        Aggregation operatörlerini normal find içinde kullanmak için
            Normal find() içinde bu işlemler $expr ile olur.

*/

// OUTPUT:
[
  {
    _id: ObjectId('691f1a551914a35d89cebea4'),
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },
    borough: 'Bronx',
    cuisine: 'Bakery',
    grades: [
      { date: { '$date': 1393804800000 }, grade: 'A', score: 2 },
      { date: { '$date': 1378857600000 }, grade: 'A', score: 6 },
      { date: { '$date': 1358985600000 }, grade: 'A', score: 10 },
      { date: { '$date': 1322006400000 }, grade: 'A', score: 9 },
      { date: { '$date': 1299715200000 }, grade: 'B', score: 14 }
    ],
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebea5'),
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },
    borough: 'Bronx',
    cuisine: 'Bakery',
    grades: [
      { date: { '$date': 1393804800000 }, grade: 'A', score: 2 },
      { date: { '$date': 1378857600000 }, grade: 'A', score: 6 },
      { date: { '$date': 1358985600000 }, grade: 'A', score: 10 },
      { date: { '$date': 1322006400000 }, grade: 'A', score: 9 },
      { date: { '$date': 1299715200000 }, grade: 'B', score: 14 }
    ],
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  }
]