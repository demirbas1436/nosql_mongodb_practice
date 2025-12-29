//---------------------------------------------------------------------------------------------------------------------
// 36.)Find all listings with listing_url, name, property_type, bed, bathrooms, price in the listingsAndReviews
//collection that have a minimum of 2 bathrooms.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find( { bathrooms: { $gte: { $numberDecimal: "2"} } }, { listing_url: 1, name: 1, property_type: 1, beds: 1, bathrooms: 1, price: 1 })

// OUTPUT:
[
  {
    _id: '10030955',
    listing_url: 'https://www.airbnb.com/rooms/10030955',
    name: 'Apt Linda Vista Lagoa - Rio',
    property_type: 'Apartment',
    beds: { '$numberInt': '1' },
    bathrooms: { '$numberDecimal': '2.0' },
    price: Decimal128('NumberDecimal("701.00")')
  },
  {
    _id: '10038496',
    listing_url: 'https://www.airbnb.com/rooms/10038496',
    name: 'Copacabana Apartment Posto 6',
    property_type: 'Apartment',
    beds: { '$numberInt': '3' },
    bathrooms: { '$numberDecimal': '2.0' },
    price: Decimal128('NumberDecimal("119.00")')
  },
  {
    _id: '10051164',
    listing_url: 'https://www.airbnb.com/rooms/10051164',
    name: "Catete's Colonial Big Hause Room B",
    property_type: 'House',
    beds: { '$numberInt': '8' },
    bathrooms: { '$numberDecimal': '4.0' },
    price: Decimal128('NumberDecimal("250.00")')
  },
  {
    _id: '10069642',
    listing_url: 'https://www.airbnb.com/rooms/10069642',
    name: 'Ótimo Apto proximo Parque Olimpico',
    property_type: 'Apartment',
    beds: { '$numberInt': '2' },
    bathrooms: { '$numberDecimal': '2.0' },
    price: Decimal128('NumberDecimal("858.00")')
  },
  {
    _id: '10109896',
    listing_url: 'https://www.airbnb.com/rooms/10109896',
    name: "THE Place to See Sydney's FIREWORKS",
    property_type: 'House',
    beds: { '$numberInt': '1' },
    bathrooms: { '$numberDecimal': '2.5' },
    price: Decimal128('NumberDecimal("250.00")')
  },
  {
    _id: '10116256',
    listing_url: 'https://www.airbnb.com/rooms/10116256',
    name: 'GOLF ROYAL RESIDENCE SUİTES(2+1)-2',
    property_type: 'Serviced apartment',
    beds: { '$numberInt': '5' },
    bathrooms: { '$numberDecimal': '2.0' },
    price: Decimal128('NumberDecimal("997.00")')
  },
  {
    _id: '1016739',
    listing_url: 'https://www.airbnb.com/rooms/1016739',
    name: 'Private Room (2)  in Guest House at Coogee Beach',
    property_type: 'House',
    beds: { '$numberInt': '2' },
    bathrooms: { '$numberDecimal': '3.5' },
    price: Decimal128('NumberDecimal("64.00")')
  },
  {
    _id: '10201975',
    listing_url: 'https://www.airbnb.com/rooms/10201975',
    name: 'Ipanema: moderno apê 2BR + garagem',
    property_type: 'Apartment',
    beds: { '$numberInt': '2' },
    bathrooms: { '$numberDecimal': '2.0' },
    price: Decimal128('NumberDecimal("298.00")')
  },
  {
    _id: '10220130',
    listing_url: 'https://www.airbnb.com/rooms/10220130',
    name: 'Cozy aptartment in Recreio (near Olympic Venues)',
    property_type: 'Apartment',
    beds: { '$numberInt': '3' },
    bathrooms: { '$numberDecimal': '3.0' },
    price: Decimal128('NumberDecimal("746.00")')
  },
  {
    _id: '1022200',
    listing_url: 'https://www.airbnb.com/rooms/1022200',
    name: 'Kailua-Kona, Kona Coast II 2b condo',
    property_type: 'Apartment',
    beds: { '$numberInt': '3' },
    bathrooms: { '$numberDecimal': '2.0' },
    price: Decimal128('NumberDecimal("135.00")')
  },
  {
    _id: '10228731',
    listing_url: 'https://www.airbnb.com/rooms/10228731',
    name: 'Quarto inteiro na Tijuca',
    property_type: 'Apartment',
    beds: { '$numberInt': '1' },
    bathrooms: { '$numberDecimal': '2.0' },
    price: Decimal128('NumberDecimal("149.00")')
  },
  {
    _id: '10264100',
    listing_url: 'https://www.airbnb.com/rooms/10264100',
    name: 'Your spot in Copacabana',
    property_type: 'Apartment',
    beds: { '$numberInt': '5' },
    bathrooms: { '$numberDecimal': '2.0' },
    price: Decimal128('NumberDecimal("798.00")')
  },
  {
    _id: '10295352',
    listing_url: 'https://www.airbnb.com/rooms/10295352',
    name: 'Amazing and Big Apt, Ipanema Beach.',
    property_type: 'Apartment',
    beds: { '$numberInt': '4' },
    bathrooms: { '$numberDecimal': '3.0' },
    price: Decimal128('NumberDecimal("1999.00")')
  },
  {
    _id: '10317142',
    listing_url: 'https://www.airbnb.com/rooms/10317142',
    name: 'Private OceanFront - Bathtub Beach. Spacious House',
    property_type: 'House',
    beds: { '$numberInt': '10' },
    bathrooms: { '$numberDecimal': '4.0' },
    price: Decimal128('NumberDecimal("795.00")')
  },
  {
    _id: '1036027',
    listing_url: 'https://www.airbnb.com/rooms/1036027',
    name: 'BBC OPORTO 4X2',
    property_type: 'Apartment',
    beds: { '$numberInt': '8' },
    bathrooms: { '$numberDecimal': '2.0' },
    price: Decimal128('NumberDecimal("100.00")')
  },
  {
    _id: '10411341',
    listing_url: 'https://www.airbnb.com/rooms/10411341',
    name: 'Beautiful flat with services',
    property_type: 'Apartment',
    beds: { '$numberInt': '2' },
    bathrooms: { '$numberDecimal': '2.0' },
    price: Decimal128('NumberDecimal("351.00")')
  },
  {
    _id: '10423504',
    listing_url: 'https://www.airbnb.com/rooms/10423504',
    name: 'Bondi Beach Dreaming 3-Bed House',
    property_type: 'House',
    beds: { '$numberInt': '6' },
    bathrooms: { '$numberDecimal': '2.0' },
    price: Decimal128('NumberDecimal("399.00")')
  },
  {
    _id: '10449328',
    listing_url: 'https://www.airbnb.com/rooms/10449328',
    name: 'Aluguel Temporada Casa São Conrado',
    property_type: 'House',
    beds: { '$numberInt': '8' },
    bathrooms: { '$numberDecimal': '7.0' },
    price: Decimal128('NumberDecimal("2499.00")')
  },
  {
    _id: '10459480',
    listing_url: 'https://www.airbnb.com/rooms/10459480',
    name: 'Greenwich Fun and Luxury',
    property_type: 'House',
    beds: { '$numberInt': '4' },
    bathrooms: { '$numberDecimal': '4.0' },
    price: Decimal128('NumberDecimal("999.00")')
  },
  {
    _id: '10519173',
    listing_url: 'https://www.airbnb.com/rooms/10519173',
    name: 'Condomínio Praia Barra da Tijuca',
    property_type: 'Condominium',
    beds: { '$numberInt': '5' },
    bathrooms: { '$numberDecimal': '2.0' },
    price: Decimal128('NumberDecimal("351.00")')
  }
]