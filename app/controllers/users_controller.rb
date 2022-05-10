class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.id
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: user.errors.full_messages.to_sentence }, status: :unauthorized
        end
    end

end
