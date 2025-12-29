//---------------------------------------------------------------------------------------------------------------------
// 43.)Find the number of documents that have a blank medium picture url in the istingsAndReviews collection.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem4.count({ "images.medium_url": "" }) //->count(...) Belirtilen koşula uyan dökümanların sayısını verir.
db.denem4.countDocuments({ "images.medium_url": "" });
db.denem4.countDocuments({ "images.medium_url": "" });


// OUTPUT:
DeprecationWarning: Collection.count() is deprecated. Use countDocuments or estimatedDocumentCount.
5555

/*
count() metodu artık kullanımdan kaldırıldı (deprecated).

Bunun yerine:

    countDocuments(query) -> Belirtilen sorguya uyan dökümanları sayar.

    estimatedDocumentCount() -> Koleksiyondaki toplam döküman sayısını hızlıca verir (filtre olmadan).
*/
