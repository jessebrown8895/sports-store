class Api::PurchasesController < ApplicationController

    def show 
        purchase = Purchase.find(params[:id])
        render json: purchase
    end
end
