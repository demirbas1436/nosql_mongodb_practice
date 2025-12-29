//---------------------------------------------------------------------------------------------------------------------
// 2.)Retrieve the cleaning fee of the first record in the listingsAndReviews collection.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.findOne().cleaning_fee

/*
Atlas atlas-h7u0ph-shard-0 [primary] denem> db.denem4.find( {}, { _id: 0, cleaning_fee: 1 } )
[
  { cleaning_fee: { '$numberDecimal': '35.00' } },
  { cleaning_fee: { '$numberDecimal': '187.00' } },
  { cleaning_fee: { '$numberDecimal': '100.00' } },
  {},
  { cleaning_fee: { '$numberDecimal': '250.00' } },
  { cleaning_fee: { '$numberDecimal': '135.00' } },
  { cleaning_fee: { '$numberDecimal': '150.00' } },
  { cleaning_fee: { '$numberDecimal': '211.00' } },
  { cleaning_fee: { '$numberDecimal': '0.00' } },
  {},
  {},
  {},
  {},
  {},
  { cleaning_fee: { '$numberDecimal': '112.00' } },
  {},
  { cleaning_fee: { '$numberDecimal': '10.00' } },
  { cleaning_fee: { '$numberDecimal': '10.00' } },
  { cleaning_fee: { '$numberDecimal': '50.00' } },
  { cleaning_fee: { '$numberDecimal': '50.00' } }
]
*/

// OUTPUT:
{ '$numberDecimal': '35.00' }
