//---------------------------------------------------------------------------------------------------------------------
// 14.)Find all the listings with name, amenities and price in the listingsAndReviews collection
//that have a "pool" amenity and a nightly price between $200 and $400.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find({
                  amenities: "Pool",
                  price: {
                      $gte: 200,
                      $lte: 400
                  }
                },
                {
                  name: 1,
                  amenities: 1,
                  price: 1,
                  _id: 0
                }).limit(2).pretty()


// OUTPUT:
[
  {
    name: 'Resort-like living in Williamsburg',
    amenities: [
      'TV',
      'Internet',
      'Wifi',
      'Air conditioning',
      'Wheelchair accessible',
      'Pool',
      'Kitchen',
      'Doorman',
      'Gym',
      'Elevator',
      'Hot tub',
      'Buzzer/wireless intercom',
      'Heating',
      'Family/kid friendly',
      'Washer',
      'Dryer',
      'Smoke detector',
      'Essentials',
      '24-hour check-in',
      'Hangers',
      'Iron'
    ],
    price: Decimal128('NumberDecimal("220.00")')
  },
  {
    name: 'Beautiful flat with services',
    amenities: [
      'Cable TV',
      'Internet',
      'Wifi',
      'Air conditioning',
      'Pool',
      'Kitchen',
      'Free parking on premises',
      'Smoking allowed',
      'Doorman',
      'Gym',
      'Elevator',
      'Hot tub',
      'Buzzer/wireless intercom',
      'Family/kid friendly',
      'Washer',
      'Dryer',
      'Essentials',
      '24-hour check-in',
      'Hangers',
      'Iron',
      'Laptop friendly workspace',
      'Hot water',
      'Bed linens',
      'Microwave',
      'Refrigerator',
      'Dishes and silverware',
      'Oven',
      'Stove'
    ],
    price: Decimal128('NumberDecimal("351.00")')
  }
]