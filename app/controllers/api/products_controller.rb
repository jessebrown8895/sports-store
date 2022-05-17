class Api::ProductsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    def index 
        product = Product.all 
        render json: product 
    end 
    
    def show 
        product = Product.find(params[:id])
        render json: product
    end 

    

end
