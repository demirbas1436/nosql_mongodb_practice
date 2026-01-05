//---------------------------------------------------------------------------------------------------------------------
// 27.)Write a query in MongoDB to find the oldest movie with an award win from the 'movies' collection.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find({ "awards.wins": { $gt: 0 } }).sort({ year: 1 }).limit(1)

/*
PROMPT
Alan belirtme:
“imdb.rating alanı $numberInt ve $numberDouble formatında. Bunları numeric’e çevirip bulkWrite kodu yazar mısın?”

Başka alan için:
“awards.wins alanı $numberInt formatında. Bunu integer’a dönüştürmek için bulk update kodu hazırla.”

Genel ifade:
“Extended JSON formatındaki alanları (örneğin $numberInt, $numberDouble) gerçek sayıya dönüştürmek için MongoDB
bulkWrite kodu yazar mısın?”
--------------
TIP DONUSUMU

var bulk = [];

db.denem8.find().forEach(function(doc) {
  var w = doc.awards && doc.awards.wins;
  if (w && typeof w === "object") {
    var newWins = null;

    if (w.$numberInt) {
      newWins = parseInt(w.$numberInt, 10);
    } else if (w.$numberDouble) {
      newWins = parseFloat(w.$numberDouble);
    }

    if (newWins !== null) {
      bulk.push({
        updateOne: {
          filter: { _id: doc._id },
          update: { $set: { "awards.wins": newWins } }
        }
      });
    }
  }

  if (bulk.length === 1000) {
    db.denem8.bulkWrite(bulk);
    bulk = [];
  }
});

if (bulk.length > 0) {
  db.denem8.bulkWrite(bulk);
}

*/

// OUTPUT:
[
  {
    _id: ObjectId('573a1397f29313caabce7c93'),
    plot: "An Earth man and his alien friend escape Earth's destruction and go on a truly strange adventure as space hitchhikers.",
    genres: [ 'Comedy', 'Sci-Fi', 'Adventure' ],
    runtime: 152,
    cast: [ 'Peter Jones', 'Simon Jones', 'David Dixon', 'Sandra Dickinson' ],
    num_mflix_comments: { '$numberInt': '1' },
    poster: 'https://m.media-amazon.com/images/M/MV5BMTI2OTMwNDU1NF5BMl5BanBnXkFtZTcwOTIyNzAzMQ@@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Hitch Hikers Guide to the Galaxy',
    fullplot: "When the Earth is destroyed a Vogon Demolition Fleet to make way for a new hyperspace bypass, Arthur Dent joins his friend Ford Prefect (who turns out to be a researcher for an electronic reference guide called the Hitchhiker's Guide to the Galaxy) for a galactic voyage on which they meet Zaphod Beeblebrox, a two-headed ex-President of the Galaxy, and his human companion, Trillian. Their journey takes them from the remains of Earth to Milliways, the Restaurant at the End of the Universe. Based on a radio play by Douglas Adams.",
    languages: [ 'English' ],
    released: ISODate('1982-10-30T00:00:00.000Z'),
    awards: { wins: 5, nominations: { '$numberInt': '0' }, text: '5 wins.' },
    lastupdated: '2015-08-27 00:23:21.167000000',
    year: '1981è',
    imdb: {
      rating: 8,
      votes: { '$numberInt': '7828' },
      id: { '$numberInt': '81874' }
    },
    countries: [ 'UK' ],
    type: 'series',
    tomatoes: {
      viewer: {
        rating: { '$numberDouble': '3.4' },
        numReviews: { '$numberInt': '102' }
      },
      lastUpdated: { '$date': { '$numberLong': '1438367914000' } }
    }
  }
]