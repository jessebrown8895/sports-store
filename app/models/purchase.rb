class Purchase < ApplicationRecord
  has_many :reviews
  belongs_to :product
  belongs_to :user
end
