class Car < ApplicationRecord
  validates :year, :make, :model, :used, presence: true
end
