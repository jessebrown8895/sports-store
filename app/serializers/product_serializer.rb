class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price, :stock_quantity, :description, :image_url, :reviews, :total_users
  has_one :creator

end
