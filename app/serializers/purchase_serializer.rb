class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :product
  has_one :user
end
