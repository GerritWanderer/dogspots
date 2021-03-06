class Spot < ActiveRecord::Base
  has_many :ratings
  has_many :comments
  has_many :spot_images
  belongs_to :user

  geocoded_by :latitude => :latitude, :longitude => :longitude

  attr_accessor :average_ratings, :image
  attr_accessible :user_id, :city, :latitude, :longitude, :street, :text, :title, :zip

  READ_ONLY_ATTRIBUTES = [:average_ratings, :image_url, :ratings]

  def average_ratings
    if self.ratings.empty?
      ratings = {:clean => 0, :ground => 0, :play => 0, :water => 0, :spot => 0}
    else
      ratings = {}
      ratings[:clean] = self.ratings.collect { |r| r.clean }.sum / self.ratings.size
      ratings[:ground] = self.ratings.collect { |r| r.ground }.sum / self.ratings.size
      ratings[:play] = self.ratings.collect { |r| r.play }.sum / self.ratings.size
      ratings[:water] = self.ratings.collect { |r| r.water }.sum / self.ratings.size
      ratings[:spot] = ratings.inject(0){|sum, hash| sum + hash[1]} / ratings.keys.size
      ratings[:size] = self.ratings.size
    end
    return ratings
  end

  def image_url
    path = self.spot_images.empty? ? "/images/spot_images_shadow.gif" : self.spot_images.shuffle.first.image.url(:thumb)
    return Rails.env.production? ? "http://www.dogspots.de#{path}" : "http://0.0.0.0:3000#{path}"
  end
end
