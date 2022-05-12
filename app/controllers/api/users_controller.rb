class Api::UsersController < ApplicationController
    # skip_before_action :authorize, only: [:show]
    def index 
        user = User.all 
        render json: user
    end
    
    def show
        # user = User.find(params[:id])
        render json: @current_user
        # render json: user
    end 

    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

end
