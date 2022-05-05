class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price, :stock_quantity, :description, :image_url
  has_one :creator
end
