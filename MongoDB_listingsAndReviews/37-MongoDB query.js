//---------------------------------------------------------------------------------------------------------------------
// 37.)Find all listings with listing_url, name, property_type, bed, price, guests_included in the listingsAndReviews
//collection that have a maximum of 5 guests included in the price.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.aggregate([
  {
    $match: { //->$match, aggregation pipeline içinde filtreleme yapmak için kullanılır.
      guests_included: {$lte: { $numberDecimal: "5" } }
    }
  },
  {
    $project: {
      listing_url: 1,
      name: 1,
      property_type: 1,
      bed: 1,
      price: 1,
      guests_included: 1
    }
  },
  {
    $limit: 2
  }
])

// OUTPUT:
[
  {
    _id: '10009999',
    listing_url: 'https://www.airbnb.com/rooms/10009999',
    name: 'Horto flat with small garden',
    property_type: 'Apartment',
    price: Decimal128('NumberDecimal("317.00")'),
    guests_included: { '$numberDecimal': '1' }
  },
  {
    _id: '1001265',
    listing_url: 'https://www.airbnb.com/rooms/1001265',
    name: 'Ocean View Waikiki Marina w/prkg',
    property_type: 'Condominium',
    price: Decimal128('NumberDecimal("115.00")'),
    guests_included: { '$numberDecimal': '1' }
  }
]