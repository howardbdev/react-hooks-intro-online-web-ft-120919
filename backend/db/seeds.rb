# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
10.times do
  make = Faker::Vehicle.make
  model = Faker::Vehicle.model(make_of_model: make)
  Car.create({
    make: make,
    model: model,
    year: (1945..2020).to_a.sample,
    miles: (0..250000).to_a.sample,
    price: (10000..65000).to_a.sample,
    used: [true, false].sample
  })
end
# 
# plays = [
#   :hamlet_quote,
#   :as_you_like_it_quote,
#   :king_richard_iii_quote,
#   :romeo_and_juliet_quote
# ]
#
# plays.each do |play|
#   10.times do
#     DealerReview.create({
#       rating: [1,2,3,4,5].sample,
#       content: Faker::Quotes::Shakespeare.send(play)
#     })
#   end
# end
