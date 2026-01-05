//---------------------------------------------------------------------------------------------------------------------
// 19.)Return all movies with title, languages, fullplot, released, directors, writers, and countries from the 'movies'
//collection in MongoDB where the word "metal" mentioned in the fullplot.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem8.find(
    {
      fullplot: /metal/i //-> fullplot: { $regex: /metal/i }
    },
    {
      title: 1,
      languages: 1,
      fullplot: 1,
      released: 1,
      directors: 1,
      writers: 1,
      countries: 1
    }
).limit(2).pretty()

/*
fullplot: /metal/i
    → JavaScript’e özel kısa yazım
    → Shell / Node.js’te çalışır
    → JSON değildir

fullplot: { $regex: "metal", $options: "i" }
    → MongoDB’nin resmi/JSON uyumlu yazımı
    → Compass, Atlas, API’lerde çalışır
*/

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
    _id: ObjectId('573a1394f29313caabcdfaaa'),
    title: 'This Island Earth',
    fullplot: "Dr. Meacham is chosen along with others by the inhabitants of the planet Metaluna to do research that will help save their dying planet. However, an evil scheme is uncovered by the suspecting Dr. Meacham when he discovers the Metalunan's plan to take over Earth. Dr. Meacham then escapes an exploding Metalunan built Earth lab along with Dr. Adams only to be kidnapped while flying away in a small plane. A flying saucer wisks both the scientists off to Metaluna where they are held accountable for blowing up the Metalunan Earth lab during their escape. They later escape there with the help of Exeter the friendly Metalunan. Metaluna then self destructs and the Doctors make it safely back to Earth, which is saved from Metalunan invasion.",
    languages: [ 'English' ],
    released: ISODate('1955-06-01T00:00:00.000Z'),
    directors: [ 'Joseph M. Newman', 'Jack Arnold' ],
    writers: [
      'Raymond F. Jones (story)',
      'Franklin Coen (screenplay)',
      "Edward G. O'Callaghan (screenplay)"
    ],
    countries: [ 'USA' ]
  }
]