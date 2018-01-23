# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

roll1 = Roll.new(dice: [
    {
      id: '22ba8c72-1aba-4219-8e90-518849d9dd51',
      value: 3,
      sides: 6
    },
    {
      id: 'c8b62374-19bf-4dcc-bdc1-80ed6c10cf1f',
      value: 3,
      sides: 6
    }
  ]
)

roll2 = Roll.new(dice:[
  {
  id: '22ba8c72-1aba-4219-8e90-518849d9dd51',
  value: 2,
  sides: 6
  },
  {
    id: 'c8b62374-19bf-4dcc-bdc1-80ed6c10cf1f',
    value: 3,
    sides: 3
  },
  {
    id: '16fb9366-d3aa-45d1-92c0-e459384656ee',
    value: 6,
    sides: 5
  },
  {
    id: '898d9ec8-63ff-424d-b71b-0754e5336bee',
    value: 5,
    sides: 6
  }
  ]
)

roll1.save
roll2.save
