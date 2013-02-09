class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_or_guest_user

  def current_or_guest_user
    if current_user
      current_user
    else
      guest_user
    end
  end

  def guest_user
    puts "auth token"
    puts cookies[:authentication_token]
    puts "auth token"
    User.find_by_authentication_token(cookies[:authentication_token] ||= create_guest_user.authentication_token)
  end

  private
  def create_guest_user
    user = User.create(:name => "Gast", :email => "guest_#{Time.now.to_i}#{rand(99)}@example.com")
    user.save(:validate => false)
    cookies[:authentication_token] = {:value => user.authentication_token, :expires => Time.now + 1.year}
    return user
  end
end
