//---------------------------------------------------------------------------------------------------------------------
// --------------------------------------- MongoDB Veri Yükleme Yöntemleri --------------------------------------------
//---------------------------------------------------------------------------------------------------------------------

/*
    Aşağıdaki rehber, JSON veri dosyalarının MongoDB’ye nasıl yükleneceğini adım adım açıklar.
    Tüm yöntemler hem lokal MongoDB kurulumları hem de MongoDB Atlas için uygulanabilir.
*/

//------------------------------------------------------
//## 1.) mongoimport ile JSON Yükleme (Önerilen Yöntem)
//------------------------------------------------------

/*
mongoimport, MongoDB’nin resmi veri aktarım aracıdır. JSON, CSV veya TSV formatındaki dosyaları hızlıca MongoDB’ye yükler.

Komut:

->mongoimport --db <veritabani> --collection <koleksiyon> --file <dosya_yolu> --jsonArray

->mongoimport --db denem4 --collection denem8 --file restaurants.json --jsonArray

MongoDB Atlas’a yükleme:
->mongoimport --uri "mongodb+srv://<user>:<pwd>@<cluster-url>/" \
      --db denem4 \
      --collection denem8 \
      --file restaurants.json \
      --jsonArray
*/

//------------------------------------------------------
//## 2.) Atlas UI (Tarayıcı) Üzerinden JSON Yükleme
//------------------------------------------------------

/*
MongoDB Atlas kullanıcıları için en kolay yöntemdir.

Adımlar:

    -Atlas Dashboard → Database

    -Koleksiyonlar → Browse Collections

    -Sağ üst → Import Data

    -JSON dosyasını seç

    -Hedef veritabanı & koleksiyon seç

    -Import tuşuna bas
*/

//------------------------------------------------------
//## 3.) Mongo Shell (local) İçinde JSON Dosyası Yükleme
//------------------------------------------------------

/*
Mongo Shell (mongosh) kullanıyorsanız ve JSON dosyanız NDJSON (satır satır JSON) formatındaysa,
dosyayı JS ile okuyup ekleyebilirsiniz.

Adımlar:
        1. Dosyayı oku ve satırlarına ayır:
        var lines = cat("C:/path/restaurants.json").split("\n");

        2. JSON objelerine dönüştür:
        |---------------------------------------------|
        |var docs = [];                               |
        |                                             |
        |for (var i = 0; i < lines.length; i++) {     |
        |    if (lines[i].trim().length > 0) {        |
        |        docs.push(JSON.parse(lines[i]));     |
        |    }                                        |
        |}                                            |
        |---------------------------------------------|

        3. MongoDB’ye ekle:
       |---------------------------------------------|
       | db.denem2.insertMany(docs);                 |
       |---------------------------------------------|


var lines = cat("denem.json").split("\n");
var docs = [];
for (var i = 0; i < lines.length; i++) {
	if (lines[i].trim().length > 0) {
		docs.push(JSON.parse(lines[i]));
		}
	}



Ne zaman kullanılır?
    - JSON dosyası satır satır obje içeriyorsa
    - mongoimport kullanmıyorsan
    - Lokal shell ile çalışıyorsan


*/

//------------------------------------------------------
//## 4.) JavaScript Dosyasından Yükleme (load())
//------------------------------------------------------

/*
Mongo Shell JSON değil, yalnızca JavaScript dosyası çalıştırabilir.

Eğer JSON dosyanı aşağıdaki gibi JS formatına çevirirsen:

                   |---------------------------------------------|
                   |          var data = [                       |
     restaurants.js|             { name: "A", score: 95 },       |
                   |            { name: "B", score: 88 }         |
                   |          ];                                 |
                   |---------------------------------------------|

Shell’de şu şekilde yüklenir:
       |--------------------------------|
       | load("C:/path/restaurants.js");|
       | db.denem.insertMany(data);     |
       |--------------------------------|
*/

//------------------------------------------------------
//## 5.) MongoDB Compass ile JSON Yükleme
//------------------------------------------------------

/*
MongoDB Compass GUI kullanıyorsan:

Adımlar:

        -Compass’ı aç

        -Sol menü → veritabanı → koleksiyon

        -ADD DATA → Import JSON

        -JSON dosyasını seç

        -Yükle
*/
