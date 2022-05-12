class Api::ProductsController < ApplicationController
    def index 
        product = Product.all 
        render json: product 
    end 
    
    def show 
        product = Product.find(params[:id])
        render json: product
    end 

    

end
