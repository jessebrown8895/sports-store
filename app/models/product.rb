class Product < ApplicationRecord
  has_many :purchases 
  has_many :users, through: :purchases
  has_many :reviews, through: :purchases 
  belongs_to :creator, class_name: "User"

  def total_users
    self.users.uniq.length
  end 
end
