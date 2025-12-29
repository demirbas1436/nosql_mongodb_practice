//---------------------------------------------------------------------------------------------------------------------
// 31.)Retrieve all documents with listing_url, name, host, price in the listingsAndReviews collection where the
//host_verifications array contains "email".
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find( { "host.host_verifications": { $regex: "email" }}, { listing_url: 1, name: 1, host: 1, price: 1 } ).limit(2).pretty()
db.denem4.find( { "host.host_verifications": /email/i }, { listing_url: 1, name: 1, host: 1, price: 1 } ).limit(2).pretty()
db.denem4.find( { "host.host_verifications": "email" }, { listing_url: 1, name: 1, host: 1, price: 1 } ).limit(2).pretty()


// OUTPUT:
[
  {
    _id: '10006546',
    listing_url: 'https://www.airbnb.com/rooms/10006546',
    name: 'Ribeira Charming Duplex',
    price: Decimal128('NumberDecimal("80.00")'),
    host: {
      host_id: '51399391',
      host_url: 'https://www.airbnb.com/users/show/51399391',
      host_name: 'Ana&Gonçalo',
      host_location: 'Porto, Porto District, Portugal',
      host_about: 'Gostamos de passear, de viajar, de conhecer pessoas e locais novos, gostamos de desporto e animais! Vivemos na cidade mais linda do mundo!!!',
      host_response_time: 'within an hour',
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: '',
      host_response_rate: { '$numberInt': '100' },
      host_is_superhost: false,
      host_has_profile_pic: true,
      host_identity_verified: true,
      host_listings_count: { '$numberInt': '3' },
      host_total_listings_count: { '$numberInt': '3' },
      host_verifications: [
        'email',
        'phone',
        'reviews',
        'jumio',
        'offline_government_id',
        'government_id'
      ]
    }
  },
  {
    _id: '10009999',
    listing_url: 'https://www.airbnb.com/rooms/10009999',
    name: 'Horto flat with small garden',
    price: Decimal128('NumberDecimal("317.00")'),
    host: {
      host_id: '1282196',
      host_url: 'https://www.airbnb.com/users/show/1282196',
      host_name: 'Ynaie',
      host_location: 'Rio de Janeiro, State of Rio de Janeiro, Brazil',
      host_about: "I am an artist and traveling is a major part of my life. I love treating visitors the way I like to be treated when I´m abroad and I'm usually renting my flat while I'm away. I can recommend some cool parties and nights out as well as advise on some hidden secrets of Rio’s nature!",
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/9681e3cc-4af1-4046-b294-2881dffb4ff8.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/pictures/9681e3cc-4af1-4046-b294-2881dffb4ff8.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: 'Jardim Botânico',
      host_is_superhost: false,
      host_has_profile_pic: true,
      host_identity_verified: false,
      host_listings_count: { '$numberInt': '1' },
      host_total_listings_count: { '$numberInt': '1' },
      host_verifications: [ 'email', 'phone', 'facebook' ]
    }
  }
]