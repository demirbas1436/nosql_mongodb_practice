//---------------------------------------------------------------------------------------------------------------------
// 39.)Find all listings with listing_url, name, property_type, bed, price, cancellation_policy in the
//listingsAndReviews collection that have a cancellation policy of "flexible".
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.aggregate([
  {
    $match: {
      cancellation_policy: "flexible"
    }
  },
  {
    $project: {
      listing_url: 1,
      name: 1,
      property_type: 1,
      bed: 1,
      price: 1,
      cancellation_policy: 1
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
    cancellation_policy: 'flexible',
    price: Decimal128('NumberDecimal("317.00")')
  },
  {
    _id: '10021707',
    listing_url: 'https://www.airbnb.com/rooms/10021707',
    name: 'Private Room in Bushwick',
    property_type: 'Apartment',
    cancellation_policy: 'flexible',
    price: Decimal128('NumberDecimal("40.00")')
  }
]