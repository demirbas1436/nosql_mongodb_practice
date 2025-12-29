//---------------------------------------------------------------------------------------------------------------------
// 24.)Retrieve all documents with name, address, host, bed_type, bed, review_scores_ratingfrom the
//listingsAndReviewscollection where the beds field is greater than or equal to 2.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
        { "beds": { $gte: { $numberInt: "2" } } },
        { "name": 1, "address": 1, "host": 1, "bed_type": 1, "beds": 1, "review_scores.review_scores_rating": 1 }
).limit(2).pretty()


// OUTPUT:
[
  {
    _id: '10006546',
    name: 'Ribeira Charming Duplex',
    bed_type: 'Real Bed',
    beds: { '$numberInt': '5' },
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
    },
    address: {
      street: 'Porto, Porto, Portugal',
      suburb: '',
      government_area: 'Cedofeita, Ildefonso, Sé, Miragaia, Nicolau, Vitória',
      market: 'Porto',
      country: 'Portugal',
      country_code: 'PT',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-8.61308' },
          { '$numberDouble': '41.1413' }
        ],
        is_location_exact: false
      }
    },
    review_scores: { review_scores_rating: 89 }
  },
  {
    _id: '10009999',
    name: 'Horto flat with small garden',
    bed_type: 'Real Bed',
    beds: { '$numberInt': '2' },
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
    },
    address: {
      street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
      suburb: 'Jardim Botânico',
      government_area: 'Jardim Botânico',
      market: 'Rio De Janeiro',
      country: 'Brazil',
      country_code: 'BR',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-43.23074991429229' },
          { '$numberDouble': '-22.966253551739655' }
        ],
        is_location_exact: true
      }
    },
    review_scores: {}
  }
]