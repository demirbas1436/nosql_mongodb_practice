//---------------------------------------------------------------------------------------------------------------------
// 15.)Find all the listings with name, amenities and address in the listingsAndReviews collection
//that have a "Washer" amenity and are located in either Canada or Mexico.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find({
                  amenities: "Washer",
                    $or: [
                          { "address.country": "Canada" },
                          { "address.country": "Mexico" }
                    ]
                },
                {
                  name: 1,
                  amenities: 1,
                  "address.country": 1,
                  "address.street": 1,
                  "address.city": 1,
                  _id: 0
                }).limit(2).pretty()


// OUTPUT:
[
  {
    name: 'Modern Spacious 1 Bedroom Loft',
    amenities: [
      'Internet',
      'Wifi',
      'Kitchen',
      'Heating',
      'Family/kid friendly',
      'Washer',
      'Dryer',
      'Smoke detector',
      'First aid kit',
      'Safety card',
      'Fire extinguisher',
      'Essentials',
      'Shampoo',
      '24-hour check-in',
      'Hangers',
      'Iron',
      'Laptop friendly workspace'
    ],
    address: { street: 'Montréal, Québec, Canada', country: 'Canada' }
  },
  {
    name: 'Ligne verte - à 15 min de métro du centre ville.',
    amenities: [
      'TV',
      'Internet',
      'Wifi',
      'Kitchen',
      'Free parking on premises',
      'Heating',
      'Washer',
      'Smoke detector',
      'Essentials',
      'Shampoo',
      'Laptop friendly workspace',
      'Hot water',
      'Bed linens'
    ],
    address: { street: 'Montréal, Québec, Canada', country: 'Canada' }
  }
]