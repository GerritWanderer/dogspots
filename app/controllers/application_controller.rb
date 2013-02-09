class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_or_guest_user

  def current_or_guest_user
    if current_user
      #if session[:guest_user_id]
      #  logging_in
      #  guest_user.destroy
      #  session[:guest_user_id] = nil
      #end
      current_user
    else
      guest_user
    end
  end

  def guest_user
    User.find(session[:guest_user_id] ||= create_guest_user.id)
  end

  private
  def create_guest_user
    user = User.create(:name => "Gast", :email => "guest_#{Time.now.to_i}#{rand(99)}@example.com")
    user.save(:validate => false)
    session[:guest_user_id] = user.id
    return user
  end
end
