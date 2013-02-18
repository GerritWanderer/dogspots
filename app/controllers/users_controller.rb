class UsersController < ApplicationController
  def create
    if cookies[:authentication_token]
      @user = User.find_by_authentication_token(cookies[:authentication_token])
    else
      @user = User.new
    end
    @user.name = params[:user][:name]
    @user.email = params[:user][:email]
    @user.is_guest = 0
    @user.save(:validate => false)

    cookies[:authentication_token] = {:value => @user.authentication_token, :expires => Time.now + 1.year}
    render :json => @user
  end
end
