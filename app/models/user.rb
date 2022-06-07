class User < ApplicationRecord
    has_many :purchases 
    has_many :created_products, class_name: "Product", foreign_key: :creator_id
    has_many :products, through: :purchases
    has_many :reviews, through: :purchases
    has_secure_password
    enum role: [:admin, :guest] 
   
    validates :first_name, presence: true
    validates :last_name, presence: true

    def total_product_purchases 
        self.products.uniq.length
    end 
end
