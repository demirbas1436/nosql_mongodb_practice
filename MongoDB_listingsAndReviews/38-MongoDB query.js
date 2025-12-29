//---------------------------------------------------------------------------------------------------------------------
// 38.)Find all listings with listing_url, name, property_type, bed, price, security_deposit in the listingsAndReviews
//collection that have a price greater than $500 and a security deposit of $1000 or more.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.aggregate([
  {
    $match: {
        $and:[
            { price: {$gt: 500 } },
            { security_deposit: { $gt: { $numberDecimal: "1000" } } }
        ]
    }
  },
  {
    $project: {
        listing_url: 1,
        name: 1,
        property_type: 1,
        bed: 1,
        price: 1,
        security_deposit: 1
    }
  },
  {
    $limit: 2
  }
])

// OUTPUT:
[
  {
    _id: '10030955',
    listing_url: 'https://www.airbnb.com/rooms/10030955',
    name: 'Apt Linda Vista Lagoa - Rio',
    property_type: 'Apartment',
    price: Decimal128('NumberDecimal("701.00")'),
    security_deposit: { '$numberDecimal': '1000.00' }
  },
  {
    _id: '10069642',
    listing_url: 'https://www.airbnb.com/rooms/10069642',
    name: 'Ótimo Apto proximo Parque Olimpico',
    property_type: 'Apartment',
    price: Decimal128('NumberDecimal("858.00")'),
    security_deposit: { '$numberDecimal': '4476.00' }
  }
]