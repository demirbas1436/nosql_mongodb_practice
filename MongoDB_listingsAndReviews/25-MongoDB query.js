//---------------------------------------------------------------------------------------------------------------------
// 25.)Find all listings with name, address, host in the listingsAndReviews collection that have a host with a host_name
//containing the word "Livia".
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
        { "host.host_name": { $regex: "Livia", $options: "i" } },
        { name: 1, address: 1, host: 1 }
).limit(2).pretty()


db.denem4.find(
  {
    "host.host_name": /Livia/i
  },
  {
    name: 1,
    address: 1,
    host: 1,
    _id: 0
  }
).limit(2).pretty()


// OUTPUT:
[
  {
    _id: '10030955',
    name: 'Apt Linda Vista Lagoa - Rio',
    host: {
      host_id: '51496939',
      host_url: 'https://www.airbnb.com/users/show/51496939',
      host_name: 'Livia',
      host_location: 'BR',
      host_about: '',
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/b7911710-9088-451d-a27b-62ad2fc2eac0.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/pictures/b7911710-9088-451d-a27b-62ad2fc2eac0.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: 'Lagoa',
      host_is_superhost: false,
      host_has_profile_pic: true,
      host_identity_verified: false,
      host_listings_count: { '$numberInt': '1' },
      host_total_listings_count: { '$numberInt': '1' },
      host_verifications: [ 'email', 'phone', 'jumio', 'government_id' ]
    },
    address: {
      street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
      suburb: 'Lagoa',
      government_area: 'Lagoa',
      market: 'Rio De Janeiro',
      country: 'Brazil',
      country_code: 'BR',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-43.205047082633435' },
          { '$numberDouble': '-22.971950988341874' }
        ],
        is_location_exact: true
      }
    }
  },
  {
    _id: '28859889',
    name: '4A-8 Center,Tsim Sha Tsui Cozy double R with ac',
    host: {
      host_id: '149697622',
      host_url: 'https://www.airbnb.com/users/show/149697622',
      host_name: 'Olivia',
      host_location: 'Hong Kong, Hong Kong',
      host_about: 'hi,我是olivia. 曾經是美食編輯的我做airbnb的房東也有幾年時間了｡在這個快樂的平台我認識了來自世界各地的 不同的新朋友,我也學習到很多不同的知識｡平日裡我愛旅行､愛音樂､愛舞蹈､愛美食､愛看電影､愛看書也愛各種時尚資訊｡對於香港的吃喝玩樂也很熟悉,大家可以隨時諮詢我哦｡\r\n' +
        '\r\n' +
        'hi,I am Olivia.I used to be a gourmet editor and been a host of airbnb for several years .I have learned so many new friends with people  from all over the world and learned so much from this wonderful platform. I love traveling,music,dancing,food,movie,reading and (Website hidden by Airbnb) a local girl I am really familiar this the places where is good to eat and relax, pls feel free to contact me if you have any problems .',
      host_response_time: 'within an hour',
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/user/8c4e6a31-02da-4480-a093-b1de966a983f.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/pictures/user/8c4e6a31-02da-4480-a093-b1de966a983f.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: 'Mong Kok',
      host_response_rate: { '$numberInt': '100' },
      host_is_superhost: false,
      host_has_profile_pic: true,
      host_identity_verified: false,
      host_listings_count: { '$numberInt': '36' },
      host_total_listings_count: { '$numberInt': '36' },
      host_verifications: [
        'email',
        'phone',
        'reviews',
        'jumio',
        'offline_government_id',
        'selfie',
        'government_id',
        'identity_manual',
        'zhima_selfie'
      ]
    },
    address: {
      street: 'Hong Kong, Kowloon, Hong Kong',
      suburb: 'Tsim Sha Tsui',
      government_area: 'Yau Tsim Mong',
      market: 'Hong Kong',
      country: 'Hong Kong',
      country_code: 'HK',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '114.17621' },
          { '$numberDouble': '22.29334' }
        ],
        is_location_exact: true
      }
    }
  }
]