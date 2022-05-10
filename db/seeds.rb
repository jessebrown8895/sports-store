require 'faker'
puts "Seeding data..."
    User.connection
    Product.connection
    Purchase.connection 
    Review.connection 

    User.delete_all
    Product.delete_all
    Purchase.delete_all
    Review.delete_all

10.times do 
    user = User.create(
        first_name: Faker::Name.first_name, 
        last_name: Faker::Name.last_name,
        address: Faker::Address.full_address,
        age: Faker::Number.within(range: 1..100),
        email: Faker::Internet.email,
        password: Faker::Internet.password,
        username: Faker::Internet.username,
        role: 1
    )

    # 10.times do 
        product = Product.create(
            name: Faker::Commerce.prouct_name,
            category: Faker::Commerce.brand,
            price: Faker::Commerce.price,
            stock_quantity: Faker::Number.between(from: 1, to: 50),
            description: Faker::Lorem.paragraph,
            image_url: Faker::LoremFlickr.image,
            creator_id: user.id
        )
    
        # 10.times do 
            purchase = Purchase.create(
                product_id: product.id,
                user_id: user.id,
                quantity: Faker::Number
            )
    
            # 10.times do 
                review = Review.create(
                    comment: Faker::Lorem.paragraphs(number: 3),
                    raiting: Faker::Number.between(from: 0, to: 5),
                    purchase_id: purchase.id
                )
            # end 
        # end
    # end
end 

