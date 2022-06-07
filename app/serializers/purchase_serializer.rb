class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :product_name
  has_one :product
  has_one :user

  def product_name
    "#{self.object.product.name}"
  end
  
end
