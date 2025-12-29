//---------------------------------------------------------------------------------------------------------------------
// 67.)Write a MongoDB query to find the name and address of the restaurants that received a
//grade of 'A' on a specific date.
//---------------------------------------------------------------------------------------------------------------------

// INPUT:
db.denem2.find(
                { grades: { $elemMatch: { "date.$date": 1374451200000, grade: "A" } } },
                {
                  name: 1,
                  address: 1,
                  _id: 0
                })

// OUTPUT:
[
  {
    address: {
      building: '351',
      coord: [ -73.98513559999999, 40.7676919 ],
      street: 'West   57 Street',
      zipcode: '10019'
    },
    name: 'Dj Reynolds Pub And Restaurant'
  },
  {
    address: {
      building: '358',
      coord: [ -73.963506, 40.758273 ],
      street: 'East 57 Street',
      zipcode: '10022'
    },
    name: "Neary'S Pub"
  },
  {
    address: {
      building: '22210',
      coord: [ -73.759249, 40.761574 ],
      street: 'Northern Boulevard',
      zipcode: '11361'
    },
    name: 'Burger King'
  },
  {
    address: {
      building: '180',
      coord: [ -73.98621539999999, 40.7350907 ],
      street: '3 Avenue',
      zipcode: '10003'
    },
    name: 'Mariella Pizza'
  },
  {
    address: {
      building: '300',
      coord: [ -73.9809789, 40.7802374 ],
      street: 'Amsterdam Avenue',
      zipcode: '10023'
    },
    name: "Josie'S Restaurant"
  },
  {
    address: {
      building: '61',
      coord: [ -73.9898776, 40.7260157 ],
      street: '2 Avenue',
      zipcode: '10003'
    },
    name: "Dempsey'S Pub"
  },
  {
    address: {
      building: '385',
      coord: [ -73.9967999, 40.720231 ],
      street: 'Broome Street',
      zipcode: '10013'
    },
    name: 'Caffe Roma'
  }
]