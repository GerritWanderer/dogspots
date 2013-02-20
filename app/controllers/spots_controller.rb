class SpotsController < ApplicationController
  before_filter :handle_attributes, :only => :create

	def index
	  @spots = Spot.includes([:ratings, :comments, :user])
	  render :json => @spots
	end

	def show
		@spot = Spot.includes([:ratings, :comments, :user]).find(params[:id])
		render :json => @spot
	end

	def create
	  @spot = Spot.create(params[:spot])
    @spot.ratings.build(@rating).save unless @rating.blank?

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

  private
  def handle_attributes
    unless params[:spot][:ratings].blank?
      @rating = params[:spot][:ratings].first
      @rating[:user_id] = current_or_guest_user.id
    end
    Spot::READ_ONLY_ATTRIBUTES.each do |attr|
      params[:spot].delete(attr)
    end
  end
end
