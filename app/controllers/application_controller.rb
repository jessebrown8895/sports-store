class ApplicationController < ActionController::API
  include ActionController::Cookies 
  rescue_from ActiveRecord::RecordNotFound, with: :no_route 
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  

  private
  
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end 

  def authorize
    render json: { error: "Not authorized"}, status: :unauthorized unless current_user
  end



  def render_unprocessable_entity_response(exception)
    render json: { error: exception.record.errors.full_messages.to_sentence }, status: :unprocessable_entity
  end

  def no_route
    render json: { error: "Resource not found"}, status: :unauthorized 
  end 
end
