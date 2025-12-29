//---------------------------------------------------------------------------------------------------------------------
// 1.)Find all listings with listing_url, name, amenities, host in the listingsAndReviewscollection that have a host
//with a Jumio verification and a about section.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
    {
      "host.host_verifications": "jumio",
      "host.host_about": { $exists: true, $ne: "" }
    },
    {
      "listing_url": 1,
      "name": 1,
      "amenities": 1,
      "host": 1
    }).limit(2).pretty()


// OUTPUT:
[
  {
    _id: '10006546',
    listing_url: 'https://www.airbnb.com/rooms/10006546',
    name: 'Ribeira Charming Duplex',
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
    }
  },
  {
    _id: '1003530',
    listing_url: 'https://www.airbnb.com/rooms/1003530',
    name: 'New York City - Upper West Side Apt',
    amenities: [
      'Internet',
      'Wifi',
      'Air conditioning',
      'Kitchen',
      'Elevator',
      'Buzzer/wireless intercom',
      'Heating',
      'Family/kid friendly',
      'Washer',
      'Dryer',
      'translation missing: en.hosting_amenity_50'
    ],
    host: {
      host_id: '454250',
      host_url: 'https://www.airbnb.com/users/show/454250',
      host_name: 'Greta',
      host_location: 'New York, New York, United States',
      host_about: 'By now I have lived longer in the city than the country however I feel equally at home in each. I like to keep one foot in each and help others to do the same!',
      host_response_time: 'within an hour',
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/f1022be4-e72a-4b35-b6d2-3d2736ddaff9.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/pictures/f1022be4-e72a-4b35-b6d2-3d2736ddaff9.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: '',
      host_response_rate: { '$numberInt': '100' },
      host_is_superhost: true,
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
    }
  }
]