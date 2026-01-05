# Extended JSON Sayı Alanlarını Gerçek Sayıya Dönüştürme

MongoDB’de bazı veriler **Extended JSON** formatında saklanmış olabilir  
(örneğin: `$numberInt`, `$numberDouble`).  
Bu doküman, bu alanları **gerçek JavaScript sayısına** dönüştürmek için
genel ve tekrar kullanılabilir bir fonksiyon içerir.

---

## 🎯 Amaç

Belirttiğin bir alanı (ör. `imdb.rating`, `awards.wins`)  
Extended JSON formatından **normal number** tipine çevirmek.

---

## ✅ Genel Fonksiyon

Aşağıdaki fonksiyon **Mongo Shell** ve **Node.js** ortamlarıyla uyumludur.

```js
function normalizeNumericField(dbName, collectionName, fieldPath) {
  var bulk = [];
  var coll = db.getSiblingDB(dbName).getCollection(collectionName);

  coll.find().forEach(function(doc) {
    // Nested field erişimi
    var parts = fieldPath.split(".");
    var value = doc;
    for (var i = 0; i < parts.length; i++) {
      if (value) value = value[parts[i]];
    }

    if (value && typeof value === "object") {
      var newVal = null;

      if (value.$numberInt) {
        newVal = parseInt(value.$numberInt, 10);
      } else if (value.$numberDouble) {
        newVal = parseFloat(value.$numberDouble);
      }

      if (newVal !== null) {
        var update = { $set: {} };
        update.$set[fieldPath] = newVal;

        bulk.push({
          updateOne: {
            filter: { _id: doc._id },
            update: update
          }
        });
      }
    }

    if (bulk.length === 1000) {
      coll.bulkWrite(bulk);
      bulk = [];
    }
  });

  if (bulk.length > 0) {
    coll.bulkWrite(bulk);
  }
}
```

---

## 🔍 Kullanım Örnekleri

### 🎬 `imdb.rating` alanını dönüştürmek

```js
normalizeNumericField("denem", "denem8", "imdb.rating");
```

---

### 🏆 `awards.wins` alanını dönüştürmek

```js
normalizeNumericField("denem", "denem8", "awards.wins");
```

---

## 📌 Parametre Açıklamaları

- **`dbName`**  
  Kullanılacak veritabanı adı

- **`collectionName`**  
  İşlem yapılacak koleksiyon adı

- **`fieldPath`**  
  Dönüştürülecek alanın yolu  
  (örnek: `"imdb.rating"`, `"awards.wins"`)

---

## ⚙️ Nasıl Çalışır?

- Her doküman tek tek gezilir
- Belirtilen alan:
  - `$numberInt` → `Number`
  - `$numberDouble` → `Number`
  olarak dönüştürülür
- Güncellemeler **1000’lik batch’ler** halinde yapılır
- `bulkWrite` kullanıldığı için performanslıdır

---

## ✅ Sonuç

👉 Tek bir fonksiyon ile  
- farklı veritabanları  
- farklı koleksiyonlar  
- farklı numeric alanlar  

için **Extended JSON → gerçek sayı** dönüşümü yapılabilir.
