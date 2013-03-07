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
    if cookies[:authentication_token]
      user = User.find_by_authentication_token(cookies[:authentication_token])
      return user.nil? ? create_guest_user : user
    else
      return create_guest_user
    end
  end

  private
  def create_guest_user
    puts request.location.to_yaml
    user = User.create(
      :name => "Gast",
      :email => "guest_#{Time.now.to_i}#{rand(99)}@example.com",
      :latitude => request.location.latitude,
      :longitude => request.location.longitude
    )
    user.save(:validate => false)
    cookies[:authentication_token] = {:value => user.authentication_token, :expires => Time.now + 1.year}
    return user
  end
end
