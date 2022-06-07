class Api::PurchasesController < ApplicationController
    def index 
        purchases = Purchase.all 
        render json: purchases
    end 
    def show 
        purchase = Purchase.find(params[:id])
        render json: purchase
    end

    def create 
        # purchase = Purchase.create(purchase_params)
        # if purchase
        #     render json: purchase, status: :created, location: purchase
        # end
        product = Product.find(params[:product_id])
        purchase = @current_user.purchases.create(product: product, user_id: params[:user_id], product_id: params[:product_id], quantity: params[:quantity])
        render json: purchase, status: :created
    end 

    private 

    def purchase_params 
        params.permit(:user_id, :product_id, :quantity)
    end 
end
