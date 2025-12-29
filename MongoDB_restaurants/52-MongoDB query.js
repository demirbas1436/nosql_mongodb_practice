//---------------------------------------------------------------------------------------------------------------------
// 52.)Write a MongoDB query to find the highest score for each restaurant.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.aggregate([{$unwind: "$grades"},
                     {$group: {_id:"$name", max_score: {$max: "$grades.score"}}},
                     {$project: {_id:0, name: "$_id", max_score:1}}, {$sort: {max_score:-1}}])

db.denem2.aggregate([{
                        $unwind: "$grades"
                      },
                      {
                        $group: {
                          _id: "$name",
                          highest_score: {
                            $max: "$grades.score"
                          }
                        }
                      }, {$sort: {highest_score:-1}}
                    ])

// OUTPUT:

[
  { max_score: 131, name: "Murals On 54/Randolphs'S" },
  { max_score: 98, name: 'Bella Napoli' },
  { max_score: 92, name: 'Gandhi' },
  { max_score: 89, name: 'West 79Th Street Boat Basin Cafe' },
  { max_score: 80, name: 'B.B. Kings' },
  { max_score: 77, name: 'Fortunato Bros Cafe & Bakery' },
  { max_score: 76, name: 'Two Boots Grand Central' },
  { max_score: 76, name: 'El Molino Rojo Restaurant' },
  { max_score: 71, name: 'Live Bait Bar & Restaurant' },
  { max_score: 70, name: 'Modern Gourmet' },
  { max_score: 68, name: 'Rohm Thai' },
  { max_score: 68, name: 'Trinidad Golden Place' },
  { max_score: 68, name: 'Victoria Pizza' },
  { max_score: 66, name: "Richer'S Bakery" },
  { max_score: 64, name: '15 East Restaurant' },
  { max_score: 64, name: 'Acappella Restaurant' },
  { max_score: 64, name: 'Pio Pio' },
  { max_score: 63, name: '7Th Avenue Donut Shop' },
  { max_score: 62, name: 'Village Yokocho' },
  { max_score: 61, name: 'Chelsea Square Restaurant' }
]