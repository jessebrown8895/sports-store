class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :address, :age, :email, :username, :total_product_purchases 
    has_many :purchases 
    has_many :created_products
    
    has_many :reviews, through: :purchases

  def full_name 
    "#{self.object.first_name}, #{self.object.last_name}"
  end 
end
