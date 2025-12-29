//---------------------------------------------------------------------------------------------------------------------
// 29.)Retrieve all documents with listing_url, name, bedrooms, cleaning_fee, and price in the listingsAndReviews
//collectionwhere the cleaning_fee field is not null.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find( { cleaning_fee: { $ne: null } }, { listing_url: 1, name: 1, bedrooms: 1, cleaning_fee: 1, price: 1 } )

// OUTPUT:
[
  {
    _id: '10082422',
    listing_url: 'https://www.airbnb.com/rooms/10082422',
    name: 'Nice room in Barcelona Center',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("50.00")'),
    cleaning_fee: { '$numberDecimal': '10.00' }
  },
  {
    _id: '10213499',
    listing_url: 'https://www.airbnb.com/rooms/10213499',
    name: 'Great studio opp. Narrabeen Lake',
    bedrooms: { '$numberInt': '0' },
    price: Decimal128('NumberDecimal("117.00")'),
    cleaning_fee: { '$numberDecimal': '0.00' }
  },
  {
    _id: '10228731',
    listing_url: 'https://www.airbnb.com/rooms/10228731',
    name: 'Quarto inteiro na Tijuca',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("149.00")'),
    cleaning_fee: { '$numberDecimal': '30.00' }
  },
  {
    _id: '10109896',
    listing_url: 'https://www.airbnb.com/rooms/10109896',
    name: "THE Place to See Sydney's FIREWORKS",
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("250.00")'),
    cleaning_fee: { '$numberDecimal': '150.00' }
  },
  {
    _id: '10047964',
    listing_url: 'https://www.airbnb.com/rooms/10047964',
    name: 'Charming Flat in Downtown Moda',
    bedrooms: { '$numberInt': '2' },
    price: Decimal128('NumberDecimal("527.00")'),
    cleaning_fee: { '$numberDecimal': '211.00' }
  },
  {
    _id: '10108388',
    listing_url: 'https://www.airbnb.com/rooms/10108388',
    name: 'Sydney Hyde Park City Apartment (checkin from 6am)',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("185.00")'),
    cleaning_fee: { '$numberDecimal': '120.00' }
  },
  {
    _id: '1016739',
    listing_url: 'https://www.airbnb.com/rooms/1016739',
    name: 'Private Room (2)  in Guest House at Coogee Beach',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("64.00")'),
    cleaning_fee: { '$numberDecimal': '30.00' }
  },
  {
    _id: '10220130',
    listing_url: 'https://www.airbnb.com/rooms/10220130',
    name: 'Cozy aptartment in Recreio (near Olympic Venues)',
    bedrooms: { '$numberInt': '3' },
    price: Decimal128('NumberDecimal("746.00")'),
    cleaning_fee: { '$numberDecimal': '373.00' }
  },
  {
    _id: '10091713',
    listing_url: 'https://www.airbnb.com/rooms/10091713',
    name: 'Surry Hills Studio - Your Perfect Base in Sydney',
    bedrooms: { '$numberInt': '0' },
    price: Decimal128('NumberDecimal("181.00")'),
    cleaning_fee: { '$numberDecimal': '50.00' }
  },
  {
    _id: '10084023',
    listing_url: 'https://www.airbnb.com/rooms/10084023',
    name: 'City center private room with bed',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("181.00")'),
    cleaning_fee: { '$numberDecimal': '50.00' }
  },
  {
    _id: '10166986',
    listing_url: 'https://www.airbnb.com/rooms/10166986',
    name: 'Resort-like living in Williamsburg',
    bedrooms: { '$numberInt': '2' },
    price: Decimal128('NumberDecimal("220.00")'),
    cleaning_fee: { '$numberDecimal': '25.00' }
  },
  {
    _id: '10051164',
    listing_url: 'https://www.airbnb.com/rooms/10051164',
    name: "Catete's Colonial Big Hause Room B",
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("250.00")'),
    cleaning_fee: { '$numberDecimal': '0.00' }
  },
  {
    _id: '10092679',
    listing_url: 'https://www.airbnb.com/rooms/10092679',
    name: 'Cozy house at Beyoğlu',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("58.00")'),
    cleaning_fee: { '$numberDecimal': '0.00' }
  },
  {
    _id: '10133350',
    listing_url: 'https://www.airbnb.com/rooms/10133350',
    name: '2 bedroom Upper east side',
    bedrooms: { '$numberInt': '2' },
    price: Decimal128('NumberDecimal("275.00")'),
    cleaning_fee: { '$numberDecimal': '35.00' }
  },
  {
    _id: '10112159',
    listing_url: 'https://www.airbnb.com/rooms/10112159',
    name: 'Downtown Oporto Inn (room cleaning)',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("40.00")'),
    cleaning_fee: { '$numberDecimal': '50.00' }
  },
  {
    _id: '10006546',
    listing_url: 'https://www.airbnb.com/rooms/10006546',
    name: 'Ribeira Charming Duplex',
    bedrooms: { '$numberInt': '3' },
    price: Decimal128('NumberDecimal("80.00")'),
    cleaning_fee: { '$numberDecimal': '35.00' }
  },
  {
    _id: '10009999',
    listing_url: 'https://www.airbnb.com/rooms/10009999',
    name: 'Horto flat with small garden',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("317.00")'),
    cleaning_fee: { '$numberDecimal': '187.00' }
  },
  {
    _id: '10117617',
    listing_url: 'https://www.airbnb.com/rooms/10117617',
    name: 'A Casa Alegre é um apartamento T1.',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("40.00")'),
    cleaning_fee: { '$numberDecimal': '15.00' }
  },
  {
    _id: '10069642',
    listing_url: 'https://www.airbnb.com/rooms/10069642',
    name: 'Ótimo Apto proximo Parque Olimpico',
    bedrooms: { '$numberInt': '2' },
    price: Decimal128('NumberDecimal("858.00")'),
    cleaning_fee: { '$numberDecimal': '112.00' }
  },
  {
    _id: '10030955',
    listing_url: 'https://www.airbnb.com/rooms/10030955',
    name: 'Apt Linda Vista Lagoa - Rio',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("701.00")'),
    cleaning_fee: { '$numberDecimal': '250.00' }
  }
]