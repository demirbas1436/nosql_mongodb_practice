//---------------------------------------------------------------------------------------------------------------------
// 23.)Retrieve all documents with name, address, host, reviewer_name, review_scores_ratingin the listingsAndReviews
//collection where the coordinates field is not null.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
        { "address.location.coordinates": { $ne: null } },
        { "name": 1, "address": 1, "host": 1, "reviews.reviewer_name": 1, "review_scores.review_scores_rating": 1, _id: 0 }
).limit(2).pretty()


// OUTPUT:
[
  {
    name: 'Ribeira Charming Duplex',
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
    review_scores: { review_scores_rating: 89 },
    reviews: [
      { reviewer_name: 'Cátia' },
      { reviewer_name: 'Théo' },
      { reviewer_name: 'Bart' },
      { reviewer_name: 'Alex' },
      { reviewer_name: 'Dan' },
      { reviewer_name: 'Anne' },
      { reviewer_name: 'Chris' },
      { reviewer_name: 'Leslie' },
      { reviewer_name: 'Philippe' },
      { reviewer_name: 'Hanneke' },
      { reviewer_name: 'Kati' },
      { reviewer_name: 'Julia' },
      { reviewer_name: 'Joshua' },
      { reviewer_name: 'Tracey' },
      { reviewer_name: 'Willem' },
      { reviewer_name: 'Fanny' },
      { reviewer_name: 'Bridget' },
      { reviewer_name: 'Oscar' },
      { reviewer_name: 'Steve' },
      { reviewer_name: 'Tina' },
      { reviewer_name: 'Mathieu' },
      { reviewer_name: 'Ido' },
      { reviewer_name: 'Amanda' },
      { reviewer_name: 'Geneviève' },
      { reviewer_name: 'Andrea' },
      { reviewer_name: 'Jennifer' },
      { reviewer_name: 'Nathalie' },
      { reviewer_name: 'Cayetana' },
      { reviewer_name: 'Mérex' },
      { reviewer_name: 'Andrea' },
      { reviewer_name: 'Bogdan' },
      { reviewer_name: 'Alison' },
      { reviewer_name: 'Marco' },
      { reviewer_name: 'Michel' },
      { reviewer_name: 'Dariusz' },
      { reviewer_name: 'Margriet' },
      { reviewer_name: 'Carlos' },
      { reviewer_name: 'Gaspard' },
      { reviewer_name: 'James' },
      { reviewer_name: '紫仪' },
      { reviewer_name: 'Sebastian' },
      { reviewer_name: 'Robby' },
      { reviewer_name: 'Romain' },
      { reviewer_name: 'Roula' },
      { reviewer_name: 'Alexander' },
      { reviewer_name: 'Mark' },
      { reviewer_name: 'Camille' },
      { reviewer_name: 'Pawel' },
      { reviewer_name: 'Thomas' },
      { reviewer_name: 'Mr' },
      { reviewer_name: 'Milo' }
    ]
  },
  {
    name: 'Horto flat with small garden',
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
    review_scores: {},
    reviews: []
  }
]