//---------------------------------------------------------------------------------------------------------------------
// 28.)Retrieve all documents with listing_url, name, bedrooms, pricein the listingsAndReviews collectionwhere the
//bedrooms field is equal to 1.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find( {bedrooms:  { $eq: { $numberInt: "1" } } }, { listing_url: 1, name: 1, bedrooms: 1, price: 1 } )

// OUTPUT:
[
  {
    _id: '10082422',
    listing_url: 'https://www.airbnb.com/rooms/10082422',
    name: 'Nice room in Barcelona Center',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("50.00")')
  },
  {
    _id: '10228731',
    listing_url: 'https://www.airbnb.com/rooms/10228731',
    name: 'Quarto inteiro na Tijuca',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("149.00")')
  },
  {
    _id: '10109896',
    listing_url: 'https://www.airbnb.com/rooms/10109896',
    name: "THE Place to See Sydney's FIREWORKS",
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("250.00")')
  },
  {
    _id: '10108388',
    listing_url: 'https://www.airbnb.com/rooms/10108388',
    name: 'Sydney Hyde Park City Apartment (checkin from 6am)',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("185.00")')
  },
  {
    _id: '1016739',
    listing_url: 'https://www.airbnb.com/rooms/1016739',
    name: 'Private Room (2)  in Guest House at Coogee Beach',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("64.00")')
  },
  {
    _id: '10215858',
    listing_url: 'https://www.airbnb.com/rooms/10215858',
    name: 'Cozy Queen Guest Room&My',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("330.00")')
  },
  {
    _id: '10021707',
    listing_url: 'https://www.airbnb.com/rooms/10021707',
    name: 'Private Room in Bushwick',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("40.00")')
  },
  {
    _id: '10084023',
    listing_url: 'https://www.airbnb.com/rooms/10084023',
    name: 'City center private room with bed',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("181.00")')
  },
  {
    _id: '10051164',
    listing_url: 'https://www.airbnb.com/rooms/10051164',
    name: "Catete's Colonial Big Hause Room B",
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("250.00")')
  },
  {
    _id: '10092679',
    listing_url: 'https://www.airbnb.com/rooms/10092679',
    name: 'Cozy house at Beyoğlu',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("58.00")')
  },
  {
    _id: '10120414',
    listing_url: 'https://www.airbnb.com/rooms/10120414',
    name: 'The LES Apartment',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("150.00")')
  },
  {
    _id: '10112159',
    listing_url: 'https://www.airbnb.com/rooms/10112159',
    name: 'Downtown Oporto Inn (room cleaning)',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("40.00")')
  },
  {
    _id: '10009999',
    listing_url: 'https://www.airbnb.com/rooms/10009999',
    name: 'Horto flat with small garden',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("317.00")')
  },
  {
    _id: '10059872',
    listing_url: 'https://www.airbnb.com/rooms/10059872',
    name: 'Soho Cozy, Spacious and Convenient',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("699.00")')
  },
  {
    _id: '10117617',
    listing_url: 'https://www.airbnb.com/rooms/10117617',
    name: 'A Casa Alegre é um apartamento T1.',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("40.00")')
  },
  {
    _id: '10030955',
    listing_url: 'https://www.airbnb.com/rooms/10030955',
    name: 'Apt Linda Vista Lagoa - Rio',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("701.00")')
  },
  {
    _id: '10227000',
    listing_url: 'https://www.airbnb.com/rooms/10227000',
    name: 'LAHAINA, MAUI! RESORT/CONDO BEACHFRONT!! SLEEPS 4!',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("499.00")')
  },
  {
    _id: '10038496',
    listing_url: 'https://www.airbnb.com/rooms/10038496',
    name: 'Copacabana Apartment Posto 6',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("119.00")')
  },
  {
    _id: '10133554',
    listing_url: 'https://www.airbnb.com/rooms/10133554',
    name: 'Double and triple rooms Blue mosque',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("121.00")')
  },
  {
    _id: '10199760',
    listing_url: 'https://www.airbnb.com/rooms/10199760',
    name: 'Uygun nezih daire',
    bedrooms: { '$numberInt': '1' },
    price: Decimal128('NumberDecimal("264.00")')
  }
]