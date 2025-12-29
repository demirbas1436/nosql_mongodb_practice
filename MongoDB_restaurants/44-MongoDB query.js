//---------------------------------------------------------------------------------------------------------------------
// 44.)Write a MongoDB query to find the restaurants that have a grade with a score of 2 or a grade with a score of 6
//and are located in the borough of Manhattan.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find({
    $and: [
        {
            $or: [
                    { "grades.score": 2 },
                    { "grades.score": 6 }
                 ]
        },
    { "borough": "Manhattan" }]}).limit(2).pretty()


db.denem2.find({
  $and: [
    {
      $or: [
        { grades: { $elemMatch: { score: 2 } } },
        { grades: { $elemMatch: { score: 6 } } }
      ]
    },
    { "borough": "Manhattan" }
  ]
}).limit(2).pretty()

/*----------------------------------------------------------------------------------------------------------------------
$elemMatch Short Explanation

    In MongoDB, $elemMatch is used to filter elements within an array.

✔ Single Condition Case

    The following two queries produce the same result:

    { "grades.score": 2 }

    { grades: { $elemMatch: { score: 2 } } }
    Why? Both check whether there is any element in the array with score = 2.

✔ Multiple Conditions Case

    In this situation, only $elemMatch works correctly, because it ensures the conditions apply to the same element.

    { grades: { $elemMatch: { score: 2, grade: "A" } } }

    In this example, MongoDB looks for a single element where both score = 2 AND grade = "A". Normal dot-notation
    cannot perform this combined check.

Summary

    Single condition → $elemMatch is not required

    Multiple conditions → $elemMatch is mandatory

    $elemMatch is the most reliable way to precisely filter array elements in MongoDB.

/*----------------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------------
Scenario

Suppose a restaurant has the following grades array:

grades: [
  { score: 2, grade: "B" },
  { score: 10, grade: "A" }
]
What’s inside?

score = 2 → exists, but grade = B

grade = "A" → exists, but score = 10

So, no single element has both score = 2 AND grade = "A".

Search with Dot-notation (INCORRECT RESULT)

If you write this query:

{ "grades.score": 2, "grades.grade": "A" }
MongoDB checks:

“Is there a grades.score equal to 2?” → Yes (first element)

“Is there a grades.grade equal to A?” → Yes (second element)

Result: MongoDB does not require these conditions to belong to the same element. It combines matches from different elements in the array. Therefore, the document is incorrectly considered a match.

Search with $elemMatch (CORRECT RESULT)

{ grades: { $elemMatch: { score: 2, grade: "A" } } }
Meaning: “Find a single element where both score = 2 and grade = A.”

MongoDB checks the array:

Element 1 → { score: 2, grade: "B" }

score = 2 ✔

grade = A ❌ ➡ Not a match

Element 2 → { score: 10, grade: "A" }

score = 2 ❌

grade = A ✔ ➡ Not a match

Since no element satisfies both conditions at the same time, the document is NOT returned.

Quick Summary

❌ Dot-notation → Looks for conditions across different elements in the array → may cause false matches

✔ $elemMatch → Ensures all conditions apply to the same element → returns correct results

/*----------------------------------------------------------------------------------------------------------------------
// OUTPUT:
[
  {
    _id: ObjectId('691f21c41914a35d89cebea7'),
    address: {
      building: '351',
      coord: [ -73.98513559999999, 40.7676919 ],
      street: 'West   57 Street',
      zipcode: '10019'
    },
    borough: 'Manhattan',
    cuisine: 'Irish',
    grades: [
      { date: { '$date': 1409961600000 }, grade: 'A', score: 2 },
      { date: { '$date': 1374451200000 }, grade: 'A', score: 11 },
      { date: { '$date': 1343692800000 }, grade: 'A', score: 12 },
      { date: { '$date': 1325116800000 }, grade: 'A', score: 12 }
    ],
    name: 'Dj Reynolds Pub And Restaurant',
    restaurant_id: '30191841'
  },
  {
    _id: ObjectId('691f21c41914a35d89cebeb2'),
    address: {
      building: '1',
      coord: [ -73.96926909999999, 40.7685235 ],
      street: 'East   66 Street',
      zipcode: '10065'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      { date: { '$date': 1399420800000 }, grade: 'A', score: 3 },
      { date: { '$date': 1367539200000 }, grade: 'A', score: 4 },
      { date: { '$date': 1335744000000 }, grade: 'A', score: 6 },
      { date: { '$date': 1324944000000 }, grade: 'A', score: 0 }
    ],
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
  }
]