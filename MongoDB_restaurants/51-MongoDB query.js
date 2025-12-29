//---------------------------------------------------------------------------------------------------------------------
// 51.)Write a  MongoDB query to find the average score for each restaurant.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([
                      { $unwind: "$grades" },
                      {
                        $group: {
                          _id: "$restaurant_id",
                          name: { $first: "$name" },
                          average_score: { $avg: "$grades.score" }
                        }
                      },
                      {
                        $project: {
                          _id: 0,
                          restaurant_id: "$_id",
                          name: 1,
                          average_score: 1
                        }
                      },
                      { $limit: 2 }
                    ]).pretty()

/*
Fields not specified in $group will disappear

In a group operation, every field must be explicitly stated; otherwise, it will be lost after grouping.

That’s why you have to add it like this:

name: { $first: "$name" }
Because due to $unwind, multiple rows are created for the same restaurant, so you need to select a single name.
*/
/*
restoran belgesi şöyle:
{
  "restaurant_id": "123",
  "name": "Pizza House",
  "grades": [
    { "score": 10 },
    { "score": 8 },
    { "score": 6 }
  ]
}

2) $unwind ne yapıyor?

$unwind: "$grades" dediğinde MongoDB tek belgeyi 3 belgeye bölüyor:

1) { id: 123, name: "Pizza House", grades.score: 10 }
2) { id: 123, name: "Pizza House", grades.score: 8 }
3) { id: 123, name: "Pizza House", grades.score: 6 }


Artık aynı restoran 3 kez var.

3) $group çalışınca ne oluyor?

Sen $group'ta şunu yazdın:

$group: {
  _id: "$restaurant_id",
  average_score: { $avg: "$grades.score" }
}


Burada MongoDB’ye şunu diyorsun:

“Ben bu grupta sadece restaurant_id ve average_score istiyorum.”

Yani artık elindeki veri şu hale gelir:

{
   _id: 123,
   average_score: 8
}


DİKKAT
Bu GROUP SONRASI BELGEDE:

❌ name YOK

❌ address YOK

❌ cuisine YOK

❌ grades YOK

Çünkü grup aşamasında yalnızca iki alan seçtin: _id ve average_score.

NAME’İ SEÇMEDİĞİN İÇİN KAYBOLDU.

Peki “name”i nasıl geri getiririz?

Group aşamasında tek tek yazmak zorundayız:

name: { $first: "$name" }

4) Neden $first kullanıyoruz?

Çünkü $unwind yüzünden restoran 3 kez çoğaldı.

Bu 3 belgeyi tekrar gruplarken “name” değerini nasıl almalısın?

$first → ilkini al

$last → sonuncuyu al

$push → hepsini bir array yapar

$addToSet → tekrar etmeyen array yapar

Ama hepsi aynı isim olduğu için en mantıklı olan:

name: { $first: "$name" }

Sonuç

*/
/*
Restaurant document:

{
  "restaurant_id": "123",
  "name": "Pizza House",
  "grades": [
    { "score": 10 },
    { "score": 8 },
    { "score": 6 }
  ]
}
2) What does $unwind do?

When you write:

json
$unwind: "$grades"
MongoDB splits the single document into 3 documents:

{ id: 123, name: "Pizza House", grades.score: 10 }

{ id: 123, name: "Pizza House", grades.score: 8 }

{ id: 123, name: "Pizza House", grades.score: 6 }

Now the same restaurant appears 3 times.

3) What happens when $group runs?

You wrote:

json
$group: {
  _id: "$restaurant_id",
  average_score: { $avg: "$grades.score" }
}
Here you are telling MongoDB:

“I only want restaurant_id and average_score in this group.”

So the data becomes:

json
{
   _id: 123,
   average_score: 8
}
In this document after grouping:

❌ name is missing

❌ address is missing

❌ cuisine is missing

❌ grades is missing

Because in the group stage you only selected two fields: _id and average_score. Since you did not select name, it disappeared.

So how do we bring back “name”?

We must explicitly write it in the group stage:

json
name: { $first: "$name" }
4) Why do we use $first?

Because $unwind caused the restaurant to appear 3 times. When regrouping these 3 documents, how should you take the name value?

$first → take the first one

$last → take the last one

$push → put them all into an array

$addToSet → put them into a non-repeating array

But since they are all the same name, the most logical choice is:

json
name: { $first: "$name" }
Result

Using $first ensures the restaurant’s name is preserved correctly after $unwind and $group.
*/





// OUTPUT:

[
  {
    name: 'Hillside Swimming Club',
    average_score: 6,
    restaurant_id: '40391824'
  },
  {
    name: "Domino'S Pizza",
    average_score: 17.8,
    restaurant_id: '40742989'
  }
]