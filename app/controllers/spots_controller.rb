class SpotsController < ApplicationController
	def index
	  @spots = Spot.includes([:ratings, :comments, :user])
	  render :json => @spots
	end

	def show
		@spot = Spot.includes([:ratings, :comments, :user]).find(params[:id])
		render :json => @spot
	end

	def create
    params[:spot].delete(:average_ratings) unless params[:spot][:average_ratings].nil?
	  @spot = Spot.create(params[:spot])
	  unless params[:spot_image].blank?
	  	encoded_string = Base64.decode64(params[:spot_image].gsub("data:image/jpeg;base64,", ""))
	  	spot_image = SpotImage.new({:spot_id => @spot.id, :user_id => 1})
	    spot_image.image = StringIO.new(encoded_string).extend(StringIoHelper)
			spot_image.save
		end
	  render :json => @spot
	end

	def update
		@spot = Spot.find(params[:id])
	  @spot.update_attributes(params[:spot])
	  render :nothing => true
	end

	def destroy
		@spot = Spot.find(params[:id]).delete
		render :nothing => true
	end
end
