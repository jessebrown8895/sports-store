class Api::ProductsController < ApplicationController
    

    def index 
        product = Product.all 
        render json: product 
    end 

    def show 
        product = Product.find(params[:id])
        render json: product
    end 

    def create
       product = @current_user.created_products.create!(product_params )
        render json: product, status: 201
    end 

    def update 
        product = Product.find(params[:id])
        product&.update!(product_params)
        render json: product, status: 200
    end
    
    def destroy
        product = Product.find(params[:id])
       
        if @current_user.created_products.include?(product)
            
            if product&.destroy 
                render json: {message: "Successfully destroyed product!"}
            end
        end 
    end

    private 
    
    def product_params 
        params.permit(:name, :category, :price, :stock_quantity, :description, :creator_id)
    end 
end
