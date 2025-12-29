//---------------------------------------------------------------------------------------------------------------------
// 27.)Retrieve all documents with name, address, host, availability in the listingsAndReviews collection where the
//availability_365 field is greater than 300.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.find(
  {
    $expr: {
      $gt: [
        {
          $convert: {
            input: {
              $getField: {
                field: { $literal: "$numberInt" },
                input: "$availability.availability_365"
              }
            },
            to: "int",
            onError: 0,
            onNull: 0
          }
        },
        300
      ]
    }
  },
  {
    name: 1,
    address: 1,
    host: 1,
    availability: 1,
    _id: 0
  }
).limit(2).pretty()


/*
KALICI DÜZELTME:
Atlas atlas-h7u0ph-shard-0 [primary] denem> db.denem4.updateMany(
...   {},
...   [
...     {
...       $set: {
...         "availability.availability_365": {
...           $convert: {
...             input: {
...               $getField: {
...                 field: { $literal: "$numberInt" },
...                 input: "$availability.availability_365"
...               }
...             },
...             to: "int",
...             onError: null,
...             onNull: null
...           }
...         }
...       }
...     }
...   ]
... )
...
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 5555,
  modifiedCount: 5555,
  upsertedCount: 0
}

db.denem4.find(
      { "availability.availability_365": { $gt: 300 } },
      {
        name: 1,
        address: 1,
        host: 1,
        availability: 1,
        _id: 0
      }
).limit(2).pretty()

*/

/*
numberInt olanların hepsini düzeltmek:
db.denem4.updateMany(
  {},
  [
    {
      $set: {
        host: {
          $map: {
            input: { $objectToArray: "$host" },
            as: "item",
            in: {
              k: "$$item.k",
              v: {
                $cond: [
                  { $eq: [ { $type: "$$item.v" }, "object" ] },
                  {
                    $convert: {
                      input: {
                        $getField: {
                          field: { $literal: "$numberInt" },
                          input: "$$item.v"
                        }
                      },
                      to: "int",
                      onError: "$$item.v",
                      onNull: "$$item.v"
                    }
                  },
                  "$$item.v"
                ]
              }
            }
          }
        }
      }
    },
    {
      $set: {
        availability: { $arrayToObject: "host" }
      }
    }
  ]
)

*/


// OUTPUT:
[
  {
    name: 'Charming Flat in Downtown Moda',
    host: {
      host_id: '1241644',
      host_url: 'https://www.airbnb.com/users/show/1241644',
      host_name: 'Zeynep',
      host_location: 'Istanbul, Istanbul, Turkey',
      host_about: 'Z.',
      host_thumbnail_url: 'https://a0.muscache.com/im/users/1241644/profile_pic/1426581715/original.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/users/1241644/profile_pic/1426581715/original.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: 'Moda',
      host_is_superhost: false,
      host_has_profile_pic: true,
      host_identity_verified: true,
      host_listings_count: { '$numberInt': '2' },
      host_total_listings_count: { '$numberInt': '2' },
      host_verifications: [
        'email',
        'phone',
        'facebook',
        'reviews',
        'jumio',
        'government_id'
      ]
    },
    address: {
      street: 'Kadıköy, İstanbul, Turkey',
      suburb: 'Moda',
      government_area: 'Kadikoy',
      market: 'Istanbul',
      country: 'Turkey',
      country_code: 'TR',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '29.03133' },
          { '$numberDouble': '40.98585' }
        ],
        is_location_exact: true
      }
    },
    availability: {
      availability_30: { '$numberInt': '27' },
      availability_60: { '$numberInt': '57' },
      availability_90: { '$numberInt': '87' },
      availability_365: { '$numberInt': '362' }
    }
  },
  {
    name: 'GOLF ROYAL RESİDENCE TAXİM(1+1):3',
    host: {
      host_id: '51471538',
      host_url: 'https://www.airbnb.com/users/show/51471538',
      host_name: 'Ahmet',
      host_location: 'Istanbul, İstanbul, Turkey',
      host_about: '',
      host_response_time: 'within an hour',
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/user/d8c830d0-16da-455c-818a-790864132e0a.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/pictures/user/d8c830d0-16da-455c-818a-790864132e0a.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: 'Şişli',
      host_response_rate: { '$numberInt': '100' },
      host_is_superhost: false,
      host_has_profile_pic: true,
      host_identity_verified: false,
      host_listings_count: { '$numberInt': '16' },
      host_total_listings_count: { '$numberInt': '16' },
      host_verifications: [ 'email', 'phone', 'reviews' ]
    },
    address: {
      street: 'Şişli, İstanbul, Turkey',
      suburb: 'Şişli',
      government_area: 'Sisli',
      market: 'Istanbul',
      country: 'Turkey',
      country_code: 'TR',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '28.98713' },
          { '$numberDouble': '41.04841' }
        ],
        is_location_exact: false
      }
    },
    availability: {
      availability_30: { '$numberInt': '30' },
      availability_60: { '$numberInt': '60' },
      availability_90: { '$numberInt': '90' },
      availability_365: { '$numberInt': '365' }
    }
  }
]