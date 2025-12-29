//---------------------------------------------------------------------------------------------------------------------
// 1.)Find the price per night of the first record in the listingsAndReviews collection
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.findOne().price

/*
1.) findOne().price çalışır

Çünkü:
    |--------------------------|
    |db.denem4.findOne().price |
    |--------------------------|
        → findOne() tek bir döküman döner.
        → O döküman bir JS objesidir.
        → .price ile alanı okuyabilirsin.


    {
      "_id": ...,
      "price": { "$numberDecimal": "80.00" }
    }
    Dolayısıyla:

    db.denem4.findOne().price


    ✔ Çalışır
    ✔ Değeri gösterir

2) find().price çalışmaz

Çünkü:
    |--------------------------|
    |db.denem4.find().price    |
    |--------------------------|

        → Burada find() bir cursor döndürür, belge döndürmez.

        → Cursor bir JavaScript objesi değildir → .price gibi alanlara erişemezsin.

    find() çıktısı:

    Cursor {
       ...
    }


    Cursor’ın alanı yoktur. Bu yüzden:

    db.denem4.find().price


    ❌ Boştur
    ❌ Alan döndüremez
    ❌ Hata vermez ama sonuç olmaz


Eğer tüm dökümanların price alanını göstermek istiyorsan:
    ✔ Doğru kullanım:
        |---------------------------------|
        |db.denem4.find({}, { price: 1 }) |
        |---------------------------------|

veya:
   |--------------------------------------------------|
   | db.denem4.find().forEach(doc => print(doc.price))|
   |--------------------------------------------------|


*/


// OUTPUT:
{ '$numberDecimal': '80.00' }
