//---------------------------------------------------------------------------------------------------------------------
// 17.)Find all movies with title, languages, fullplot, released, directors, writers, countries from the 'movies'
//collection in MongoDB that have a fullplot containing the word "fire".
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find(
    {
      fullplot: { $regex: /fire/i }
    },
    {
      title: 1,
      languages: 1,
      fullplot: 1,
      released: 1,
      directors: 1,
      writers: 1,
      countries: 1
    }).limit(2).pretty()


// OUTPUT:
[
  {
    _id: ObjectId('573a1390f29313caabcd4135'),
    title: 'Blacksmith Scene',
    fullplot: 'A stationary camera looks at a large anvil with a blacksmith behind it and one on either side. The smith in the middle draws a heated metal rod from the fire, places it on the anvil, and all three begin a rhythmic hammering. After several blows, the metal goes back in the fire. One smith pulls out a bottle of beer, and they each take a swig. Then, out comes the glowing metal and the hammering resumes.',
    countries: [ 'USA' ],
    released: ISODate('1893-05-09T00:00:00.000Z'),
    directors: [ 'William K.L. Dickson' ]
  },
  {
    _id: ObjectId('573a1390f29313caabcd5a93'),
    title: 'Civilization',
    fullplot: 'Allegorical film about peace. A king starts a war, many of the women are against it, people are pressed into service. A count has constructed a submarine and gets the order to sink an ocean liner, that is also carrying - supposedly - ammunition for the enemy. The count refuses to fire the torpedos, and sinks the submarine. He survives, but in a limbo between death and life where he meets Jesus, who takes him over to preach peace. Naturally the king arrests him and sentences him to death for treason, but then Jesus shows him the real face of war.',
    countries: [ 'USA' ],
    released: ISODate('1916-06-02T00:00:00.000Z'),
    directors: [
      'Reginald Barker',
      'Thomas H. Ince',
      'Raymond B. West',
      'Walter Edwards',
      'David Hartford',
      'Jay Hunt',
      'J. Parker Read Jr.'
    ],
    writers: [ 'C. Gardner Sullivan' ]
  }
]