//---------------------------------------------------------------------------------------------------------------------
// 35.)Retrieve all documents with listing_url, name, property_type, bed, price in the listingsAndReviewscollectionwhere
//the property_type field is equal to "Apartment" and the beds field is greater than or equal to 2.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
                {
                    property_type: "Apartment",  "beds": { $gt: { $numberInt: "2" } }
                },
                {
                    listing_url: 1, name: 1, property_type: 1, beds: 1, price: 1
                })

// OUTPUT:
[
  {
    _id: '10038496',
    listing_url: 'https://www.airbnb.com/rooms/10038496',
    name: 'Copacabana Apartment Posto 6',
    property_type: 'Apartment',
    beds: { '$numberInt': '3' },
    price: Decimal128('NumberDecimal("119.00")')
  },
  {
    _id: '10066928',
    listing_url: 'https://www.airbnb.com/rooms/10066928',
    name: '3 chambres au coeur du Plateau',
    property_type: 'Apartment',
    beds: { '$numberInt': '3' },
    price: Decimal128('NumberDecimal("140.00")')
  },
  {
    _id: '10116578',
    listing_url: 'https://www.airbnb.com/rooms/10116578',
    name: 'Apartamento zona sul do RJ',
    property_type: 'Apartment',
    beds: { '$numberInt': '3' },
    price: Decimal128('NumberDecimal("933.00")')
  },
  {
    _id: '10166883',
    listing_url: 'https://www.airbnb.com/rooms/10166883',
    name: 'Large railroad style 3 bedroom apt in Manhattan!',
    property_type: 'Apartment',
    beds: { '$numberInt': '4' },
    price: Decimal128('NumberDecimal("180.00")')
  },
  {
    _id: '10220130',
    listing_url: 'https://www.airbnb.com/rooms/10220130',
    name: 'Cozy aptartment in Recreio (near Olympic Venues)',
    property_type: 'Apartment',
    beds: { '$numberInt': '3' },
    price: Decimal128('NumberDecimal("746.00")')
  },
  {
    _id: '1022200',
    listing_url: 'https://www.airbnb.com/rooms/1022200',
    name: 'Kailua-Kona, Kona Coast II 2b condo',
    property_type: 'Apartment',
    beds: { '$numberInt': '3' },
    price: Decimal128('NumberDecimal("135.00")')
  },
  {
    _id: '10264100',
    listing_url: 'https://www.airbnb.com/rooms/10264100',
    name: 'Your spot in Copacabana',
    property_type: 'Apartment',
    beds: { '$numberInt': '5' },
    price: Decimal128('NumberDecimal("798.00")')
  },
  {
    _id: '10295352',
    listing_url: 'https://www.airbnb.com/rooms/10295352',
    name: 'Amazing and Big Apt, Ipanema Beach.',
    property_type: 'Apartment',
    beds: { '$numberInt': '4' },
    price: Decimal128('NumberDecimal("1999.00")')
  },
  {
    _id: '102995',
    listing_url: 'https://www.airbnb.com/rooms/102995',
    name: 'UWS Brownstone Near Central Park',
    property_type: 'Apartment',
    beds: { '$numberInt': '3' },
    price: Decimal128('NumberDecimal("212.00")')
  },
  {
    _id: '1036027',
    listing_url: 'https://www.airbnb.com/rooms/1036027',
    name: 'BBC OPORTO 4X2',
    property_type: 'Apartment',
    beds: { '$numberInt': '8' },
    price: Decimal128('NumberDecimal("100.00")')
  },
  {
    _id: '1038163',
    listing_url: 'https://www.airbnb.com/rooms/1038163',
    name: 'luxury apartment in istanbul taxsim',
    property_type: 'Apartment',
    beds: { '$numberInt': '3' },
    price: Decimal128('NumberDecimal("269.00")')
  },
  {
    _id: '10486984',
    listing_url: 'https://www.airbnb.com/rooms/10486984',
    name: 'Cheerful new renovated central apt',
    property_type: 'Apartment',
    beds: { '$numberInt': '4' },
    price: Decimal128('NumberDecimal("264.00")')
  },
  {
    _id: '10558807',
    listing_url: 'https://www.airbnb.com/rooms/10558807',
    name: 'Park Guell apartment with terrace',
    property_type: 'Apartment',
    beds: { '$numberInt': '3' },
    price: Decimal128('NumberDecimal("85.00")')
  },
  {
    _id: '10560325',
    listing_url: 'https://www.airbnb.com/rooms/10560325',
    name: 'Spacious and well located apartment',
    property_type: 'Apartment',
    beds: { '$numberInt': '3' },
    price: Decimal128('NumberDecimal("60.00")')
  },
  {
    _id: '10570041',
    listing_url: 'https://www.airbnb.com/rooms/10570041',
    name: 'Jardim Botânico Gourmet 2 bdroom',
    property_type: 'Apartment',
    beds: { '$numberInt': '5' },
    price: Decimal128('NumberDecimal("395.00")')
  },
  {
    _id: '10581101',
    listing_url: 'https://www.airbnb.com/rooms/10581101',
    name: 'Grand apartment Sagrada Familia',
    property_type: 'Apartment',
    beds: { '$numberInt': '6' },
    price: Decimal128('NumberDecimal("169.00")')
  },
  {
    _id: '10596036',
    listing_url: 'https://www.airbnb.com/rooms/10596036',
    name: 'Apt Quarto e Sala amplo Laranjeiras',
    property_type: 'Apartment',
    beds: { '$numberInt': '4' },
    price: Decimal128('NumberDecimal("701.00")')
  },
  {
    _id: '10628126',
    listing_url: 'https://www.airbnb.com/rooms/10628126',
    name: 'Ribeira Smart Flat',
    property_type: 'Apartment',
    beds: { '$numberInt': '3' },
    price: Decimal128('NumberDecimal("80.00")')
  },
  {
    _id: '10635276',
    listing_url: 'https://www.airbnb.com/rooms/10635276',
    name: 'GREAT Apartment at Barra da Tijuca',
    property_type: 'Apartment',
    beds: { '$numberInt': '7' },
    price: Decimal128('NumberDecimal("933.00")')
  },
  {
    _id: '10648267',
    listing_url: 'https://www.airbnb.com/rooms/10648267',
    name: 'Lovely ap at Leblon beach',
    property_type: 'Apartment',
    beds: { '$numberInt': '3' },
    price: Decimal128('NumberDecimal("298.00")')
  }
]