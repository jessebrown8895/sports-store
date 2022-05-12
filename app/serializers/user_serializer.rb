class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :address, :age, :email, :username
    has_many :purchases 
    has_many :created_products, class_name: "Product", foreign_key: :creator_id
    
    has_many :reviews, through: :purchases

  def full_name 
    "#{self.object.first_name}, #{self.object.last_name}"
  end 
end
