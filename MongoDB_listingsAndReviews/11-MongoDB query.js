//---------------------------------------------------------------------------------------------------------------------
// 11.)Find all the listings in the listingsAndReviews collection with listing_url, name, host_name, host_location,
//reviewer_name and price that have a nightly price greater than $500.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.updateMany( { "price": { $type: "object" } }, //-> Hedef Nesneleri Seçme
                      [
                        {
                          $set: { //-> belgenin mevcut price alanını günceller.
                            price: {
                              $toDecimal: { //-> bir değeri Decimal128 türüne dönüştürür. Bu tür, sayısal verilerin tam doğrulukla saklanmasını sağlar (özellikle para birimlerinde çok kullanılır).
                                $first: { //-> dönen dizinin ilk elemanını alır.
                                  $map: { //-> diziyi gezip her elemanın değerini alır.
                                    input: { $objectToArray: "$price" }, //-> price içindeki nesneyi bir diziye (array) dönüştürür. ({ "$numberDecimal": "701.00" } -> [{ "k": "$numberDecimal", "v": "701.00" }])
                                      as: "f",
                                      in: "$$f.v"     // obje içindeki ilk value
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
  matchedCount: 5555,
  modifiedCount: 5555,
  upsertedCount: 0
}
*/
db.denem4.find( { price: { $gt: NumberDecimal("500") } },
                {
                   listing_url: 1,
                   name: 1,
                   "host.host_name": 1,
                   "host.host_location": 1,
                   "reviews.reviewer_name": 1,
                   price: 1,
                   _id: 0
                } ).limit(2).pretty()

// OUTPUT:
[
  {
    listing_url: 'https://www.airbnb.com/rooms/10030955',
    name: 'Apt Linda Vista Lagoa - Rio',
    price: Decimal128('NumberDecimal("701.00")'),
    host: { host_name: 'Livia', host_location: 'BR' },
    reviews: []
  },
  {
    listing_url: 'https://www.airbnb.com/rooms/10047964',
    name: 'Charming Flat in Downtown Moda',
    price: Decimal128('NumberDecimal("527.00")'),
    host: {
      host_name: 'Zeynep',
      host_location: 'Istanbul, Istanbul, Turkey'
    },
    reviews: [ { reviewer_name: 'Mihra' } ]
  }
]