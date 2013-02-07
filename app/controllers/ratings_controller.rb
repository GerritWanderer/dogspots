class RatingsController < ApplicationController
  def create
    @rating = Rating.create(params[:@rating])
    render :json => @rating
  end

  def destroy
    @rating = Rating.find(params[:id]).delete
    render :nothing => true
  end
end
