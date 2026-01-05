//---------------------------------------------------------------------------------------------------------------------
// 3.)Find all movies with full information from the 'movies' collection that have "Short" genre.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find( { genres: "Short" } ).limit(2).pretty() //->içinde "Short" geçen belgeleri getirir.

db.denem8.find({ genres: ["Short"] }) //->sadece "Short" olanları (tek elemanlı array) bulur.

db.denem8.find({
  genres: { $size: 1, $all: ["Short"] }
  //->$all operatörü, bir array alanının içinde belirtilen tüm değerlerin bulunup bulunmadığını kontrol eder.
  //->Eğer ["Short", "Western"] gibi bir array varsa, yine eşleşir çünkü "Short" mevcut.
}).limit(2).pretty()


// OUTPUT:
[
  {
    _id: ObjectId('573a1390f29313caabcd4135'),
    plot: 'Three men hammer on an anvil and pass a bottle of beer around.',
    genres: [ 'Short' ],
    runtime: 1,
    cast: [ 'Charles Kayser', 'John Ott' ],
    num_mflix_comments: { '$numberInt': '1' },
    title: 'Blacksmith Scene',
    fullplot: 'A stationary camera looks at a large anvil with a blacksmith behind it and one on either side. The smith in the middle draws a heated metal rod from the fire, places it on the anvil, and all three begin a rhythmic hammering. After several blows, the metal goes back in the fire. One smith pulls out a bottle of beer, and they each take a swig. Then, out comes the glowing metal and the hammering resumes.',
    countries: [ 'USA' ],
    released: { '$date': { '$numberLong': '-2418768000000' } },
    directors: [ 'William K.L. Dickson' ],
    rated: 'UNRATED',
    awards: {
      wins: { '$numberInt': '1' },
      nominations: { '$numberInt': '0' },
      text: '1 win.'
    },
    lastupdated: '2015-08-26 00:03:50.133000000',
    year: { '$numberInt': '1893' },
    imdb: {
      rating: { '$numberDouble': '6.2' },
      votes: { '$numberInt': '1189' },
      id: { '$numberInt': '5' }
    },
    type: 'movie',
    tomatoes: {
      viewer: {
        rating: { '$numberInt': '3' },
        numReviews: { '$numberInt': '184' },
        meter: { '$numberInt': '32' }
      },
      lastUpdated: { '$date': { '$numberLong': '1435516449000' } }
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd42e8'),
    plot: 'A group of bandits stage a brazen train hold-up, only to find a determined posse hot on their heels.',
    genres: [ 'Short', 'Western' ],
    runtime: 11,
    cast: [
      'A.C. Abadie',
      "Gilbert M. 'Broncho Billy' Anderson",
      'George Barnes',
      'Justus D. Barnes'
    ],
    poster: 'https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Great Train Robbery',
    fullplot: "Among the earliest existing films in American cinema - notable as the first film that presented a narrative story to tell - it depicts a group of cowboy outlaws who hold up a train and rob the passengers. They are then pursued by a Sheriff's posse. Several scenes have color included - all hand tinted.",
    languages: [ 'English' ],
    released: { '$date': { '$numberLong': '-2085523200000' } },
    directors: [ 'Edwin S. Porter' ],
    rated: 'TV-G',
    awards: {
      wins: { '$numberInt': '1' },
      nominations: { '$numberInt': '0' },
      text: '1 win.'
    },
    lastupdated: '2015-08-13 00:27:59.177000000',
    year: { '$numberInt': '1903' },
    imdb: {
      rating: { '$numberDouble': '7.4' },
      votes: { '$numberInt': '9847' },
      id: { '$numberInt': '439' }
    },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: {
        rating: { '$numberDouble': '3.7' },
        numReviews: { '$numberInt': '2559' },
        meter: { '$numberInt': '75' }
      },
      fresh: { '$numberInt': '6' },
      critic: {
        rating: { '$numberDouble': '7.6' },
        numReviews: { '$numberInt': '6' },
        meter: { '$numberInt': '100' }
      },
      rotten: { '$numberInt': '0' },
      lastUpdated: { '$date': { '$numberLong': '1439061370000' } }
    }
  }
]