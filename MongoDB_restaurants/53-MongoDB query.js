//---------------------------------------------------------------------------------------------------------------------
// 53.)Write a MongoDB query to find the lowest score for each restaurant.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([{$unwind: "$grades"},
                     {$group: {_id:"$name", min_score: {$min: "$grades.score"}}},
                     {$project: {_id:0, name: "$_id", min_score:1}}])

db.denem2.aggregate([{
                        $unwind: "$grades"
                      },
                      {
                        $group: {
                          _id: "$name",
                          lowest_score: {
                            $min: "$grades.score"
                          }
                        }
                      }, { $project: { _id:0, name: "$_id", lowest_score:1 } }
                    ])
/*
Atlas atlas-h7u0ph-shard-0 [primary] denem> db.denem2.aggregate([
...   { $unwind: "$grades" },
...   { $group: { _id:"$name", min_score:{ $min:"$grades.score" } } },
...   { $project:{ _id:0, name:"$_id", min_score:1 } },
...   { $count:"total" }
... ])
...
[ { total: 3238 } ]
Atlas atlas-h7u0ph-shard-0 [primary] denem> db.denem2.aggregate([
...   { $unwind:"$grades" },
...   { $group:{ _id:"$name", lowest_score:{ $min:"$grades.score" } } },
...   { $count:"total" }
... ])
...
[ { total: 3238 } ]
*/

// OUTPUT:

[
  { min_score: 3, name: 'The Irish Pub' },
  { min_score: 11, name: 'La Isla' },
  { min_score: 2, name: 'Dancing Crane Cafe (Bx Zoo)' },
  { min_score: 5, name: 'Panda Restuarant' },
  { min_score: 9, name: "Mary Ann'S" },
  { min_score: 2, name: 'Manhattan Diner' },
  { min_score: 3, name: 'Kana Tapas Bar & Restaurant' },
  { min_score: 2, name: 'Douglaston Club' },
  { min_score: 5, name: 'Le Gigot' },
  { min_score: 10, name: 'Acqua' },
  { min_score: 4, name: 'Sideshows By The Seashore' },
  { min_score: 3, name: 'Pipers Kilt' },
  { min_score: 8, name: 'Le Colonial' },
  { min_score: 12, name: "Li Greci'S Staaten Restaurant" },
  { min_score: 8, name: 'The River Cafe' },
  { min_score: 13, name: 'Down Town Association' },
  { min_score: 2, name: 'Ah! Chihuahua' },
  { min_score: 8, name: 'Frank' },
  { min_score: 10, name: 'United Grocery & Deli' },
  { min_score: 7, name: 'Corner Gourmet Ii' }
]