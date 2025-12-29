//---------------------------------------------------------------------------------------------------------------------
// 49.)Find all listings with listing_url, name, address, host_verificationand size of host_verification array in the
//listingsAndReviews collection that have a host with at least 3 verifications.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.aggregate([
  {
    $match: { //->$match, aggregation pipeline içinde dökümanları filtrelemek için kullanılır.
      "host.host_verifications": { $exists: true },
      $expr: { $gte: [{ $size: "$host.host_verifications" }, 3] } //->$expr, $match içinde hesaplama yapmayı sağlar.
    }
  },
  {
    $project: {
      "listing_url": 1,
      "name": 1,
      "address": 1,
      "host.host_verifications": 1,
      "host_verifications_count": { $size: "$host.host_verifications" }
    }
  },
  {
    $limit: 2
  }
])

/*
$expr KULLANIMI

* $expr, aggregation içinde kullanılabilen bir ifade (expression) komutudur.
* Bu, özellikle field-level hesaplamalar, dinamik karşılaştırmalar ve fonksiyonel işlemler yapmak için kullanılır.

1. Alanlar Arası Karşılaştırmalar
    ------------------------------------------------------------------
    | Bir ürünün normal fiyatı ile indirimli fiyatı karşılaştırması: |
    | db.products.aggregate([                                        |
    |   {                                                            |
    |     $match: {                                                  |
    |       $expr: { $gte: ["$price", "$discount_price"] }           |
    |     }                                                          |
    |   }                                                            |
    | ])                                                             |
    ------------------------------------------------------------------

2. Matematiksel İşlemler
    ----------------------------------------------------------------
    | Bir ürünün fiyatı ve vergi oranını toplamak:                 |
    | db.products.aggregate([                                      |
    |   {                                                          |
    |     $match: {                                                |
    |       $expr: { $gte: [{ $add: ["$price", "$tax"] }, 100] }   |
    |     }                                                        |
    |   }                                                          |
    | ])                                                           |
    ----------------------------------------------------------------

3. Dizi İşlemleri
    ----------------------------------------------------------------
    | Bir kullanıcının host_verifications dizisinin uzunluğu:      |
    | db.users.aggregate([                                         |
    |   {                                                          |
    |     $match: {                                                |
    |      $expr: { $gte: [{ $size: "$host_verifications" }, 3] }  |
    |     }                                                        |
    |   }                                                          |
    | ])                                                           |
    ----------------------------------------------------------------

4. Tarihlerle Çalışma
    -------------------------------------------------------------------
    | Bir tarih alanının bugünden önce olup olmadığını kontrol etmek: |
    | db.events.aggregate([                                           |
    |   {                                                             |
    |     $match: {                                                   |
    |      $expr: { $lt: ["$event_date", new Date()] }                |
    |     }                                                           |
    |   }                                                             |
    | ])                                                              |
    -------------------------------------------------------------------


$expr kullanması gereken durumlar

| Durum                       | Örnek                                 |
| --------------------------- | ------------------------------------- |
| Dizi uzunluğu kontrolü      | `$size`                               |
| Alanlar arası karşılaştırma | `$gte: ["$price", "$discount_price"]` |
| Matematiksel işlem          | `$add`, `$multiply`                   |
| Tarih hesaplama             | `$dateDiff`                           |
| Koşullu filtre              | `$cond`                               |

*/

// OUTPUT:
[
  {
    _id: '10006546',
    listing_url: 'https://www.airbnb.com/rooms/10006546',
    name: 'Ribeira Charming Duplex',
    host: {
      host_verifications: [
        'email',
        'phone',
        'reviews',
        'jumio',
        'offline_government_id',
        'government_id'
      ]
    },
    address: {
      street: 'Porto, Porto, Portugal',
      suburb: '',
      government_area: 'Cedofeita, Ildefonso, Sé, Miragaia, Nicolau, Vitória',
      market: 'Porto',
      country: 'Portugal',
      country_code: 'PT',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-8.61308' },
          { '$numberDouble': '41.1413' }
        ],
        is_location_exact: false
      }
    },
    host_verifications_count: 6
  },
  {
    _id: '10009999',
    listing_url: 'https://www.airbnb.com/rooms/10009999',
    name: 'Horto flat with small garden',
    host: { host_verifications: [ 'email', 'phone', 'facebook' ] },
    address: {
      street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
      suburb: 'Jardim Botânico',
      government_area: 'Jardim Botânico',
      market: 'Rio De Janeiro',
      country: 'Brazil',
      country_code: 'BR',
      location: {
        type: 'Point',
        coordinates: [
          { '$numberDouble': '-43.23074991429229' },
          { '$numberDouble': '-22.966253551739655' }
        ],
        is_location_exact: true
      }
    },
    host_verifications_count: 3
  }
]