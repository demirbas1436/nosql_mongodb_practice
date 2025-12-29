//---------------------------------------------------------------------------------------------------------------------
// 30.)Retrieve all documents with listing_url, name, bedrooms, pricein the listingsAndReviews collection where
//the price field is between 600 and 900.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
        { price: { $gte: 600, $lte: 900 } },
        { listing_url: 1, name: 1, bedrooms: 1, price: 1 }
).limit(2).pretty()


// OUTPUT:
[
  {
    _id: '10220130',
    listing_url: 'https://www.airbnb.com/rooms/10220130',
    name: 'Cozy aptartment in Recreio (near Olympic Venues)',
    bedrooms: { '$numberInt': '3' },
    price: Decimal128('NumberDecimal("746.00")')
  },
  {
    _id: '10115921',
    listing_url: 'https://www.airbnb.com/rooms/10115921',
    name: 'GOLF ROYAL RESİDENCE TAXİM(1+1):3',
    bedrooms: { '$numberInt': '2' },
    price: Decimal128('NumberDecimal("838.00")')
  }
]