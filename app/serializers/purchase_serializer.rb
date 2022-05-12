class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :product, :quantity
  has_one :product
  has_one :user
end
