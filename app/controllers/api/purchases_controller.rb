class Api::PurchasesController < ApplicationController
    def index 
        purchases = Purchase.all 
        render json: purchases
    end 
    def show 
        product = Product.find(prams[:id])
        purchase = Purchase.find(params[:id])
        render json: purchase
    end

    def create 
        product = Product.find(params[:product_id])
        purchase = @current_user.purchases.create(product: product, user_id: params[:user_id], product_id: params[:product_id], quantity: params[:quantity])
        render json: purchase, status: :created
    end 

    private 

    def purchase_params 
        params.permit(:user_id, :product_id, :quantity)
    end 
end
