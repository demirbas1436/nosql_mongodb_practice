//---------------------------------------------------------------------------------------------------------------------
// 40.)Find all listings with listing_url, name, property_type, bed_type, amenities, price in the listingsAndReviews
//collection that have a real bed as the bed type and a kitchen amenity.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.aggregate([
  {
    $match: {
      bed_type: "Real Bed",
      amenities: "Kitchen"
    }
  },
  {
    $project: {
      listing_url: 1,
      name: 1,
      property_type: 1,
      bed_type: 1,
      amenities: 1,
      price: 1
    }
  },
  {
    $limit: 2
  }
])


// OUTPUT:
[
  {
    _id: '10006546',
    listing_url: 'https://www.airbnb.com/rooms/10006546',
    name: 'Ribeira Charming Duplex',
    property_type: 'House',
    bed_type: 'Real Bed',
    amenities: [
      'TV',
      'Cable TV',
      'Wifi',
      'Kitchen',
      'Paid parking off premises',
      'Smoking allowed',
      'Pets allowed',
      'Buzzer/wireless intercom',
      'Heating',
      'Family/kid friendly',
      'Washer',
      'First aid kit',
      'Fire extinguisher',
      'Essentials',
      'Hangers',
      'Hair dryer',
      'Iron',
      'Pack ’n Play/travel crib',
      'Room-darkening shades',
      'Hot water',
      'Bed linens',
      'Extra pillows and blankets',
      'Microwave',
      'Coffee maker',
      'Refrigerator',
      'Dishwasher',
      'Dishes and silverware',
      'Cooking basics',
      'Oven',
      'Stove',
      'Cleaning before checkout',
      'Waterfront'
    ],
    price: Decimal128('NumberDecimal("80.00")')
  },
  {
    _id: '10009999',
    listing_url: 'https://www.airbnb.com/rooms/10009999',
    name: 'Horto flat with small garden',
    property_type: 'Apartment',
    bed_type: 'Real Bed',
    amenities: [
      'Wifi',
      'Wheelchair accessible',
      'Kitchen',
      'Free parking on premises',
      'Smoking allowed',
      'Hot tub',
      'Buzzer/wireless intercom',
      'Family/kid friendly',
      'Washer',
      'First aid kit',
      'Essentials',
      'Hangers',
      'Hair dryer',
      'Iron',
      'Laptop friendly workspace'
    ],
    price: Decimal128('NumberDecimal("317.00")')
  }
]