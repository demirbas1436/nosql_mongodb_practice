//---------------------------------------------------------------------------------------------------------------------
// 9.) Retrieve all movies from the 'movies' collection that have complete information and have a viewer rating higher
//than 4 on Tomatoes.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find({
  "tomatoes.viewer.rating": { $gt: { $numberInt: "4" } }
}).limit(1).pretty()



// OUTPUT:
[
  {
    _id: ObjectId('573a1394f29313caabce07b1'),
    plot: 'Quotidian scenes of Paris along the quays beside the River Seine. Fishing, snoozing, cutting hair, washing clothes. Lovers embrace as nuns gaze. Students sketch, models pose. A diver ...',
    genres: [ 'Documentary', 'Short' ],
    runtime: 30,
    title: 'The Seine Meets Paris',
    num_mflix_comments: { '$numberInt': '4' },
    countries: [ 'France' ],
    fullplot: `Quotidian scenes of Paris along the quays beside the River Seine. Fishing, snoozing, cutting hair, washing clothes. Lovers embrace as nuns gaze. Students sketch, models pose. A diver recovers a boy's lost bicycle. C'est la vie. It's "a river like any other". Sprightly accordion music rounds out the atmosphere.`,
    languages: [ 'French' ],
    cast: [ 'Serge Reggiani' ],
    directors: [ 'Joris Ivens' ],
    writers: [
      'Joris Ivens',
      'Jacques Prèvert (poem)',
      'Georges Sadoul (idea)'
    ],
    awards: {
      wins: { '$numberInt': '2' },
      nominations: { '$numberInt': '0' },
      text: '2 wins.'
    },
    lastupdated: '2015-07-25 00:05:40.147000000',
    year: { '$numberInt': '1957' },
    imdb: {
      rating: { '$numberDouble': '7.3' },
      votes: { '$numberInt': '150' },
      id: { '$numberInt': '50948' }
    },
    type: 'movie',
    tomatoes: {
      viewer: {
        rating: { '$numberInt': '5' },
        numReviews: { '$numberInt': '2' }
      },
      lastUpdated: { '$date': { '$numberLong': '1440615080000' } }
    }
  }
]