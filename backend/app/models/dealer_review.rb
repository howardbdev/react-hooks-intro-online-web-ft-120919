class DealerReview < ApplicationRecord
  validates :rating, :content, presence: true
end
