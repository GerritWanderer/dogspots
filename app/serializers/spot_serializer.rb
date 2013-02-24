class SpotSerializer < ActiveModel::Serializer
  embed :ids, :include => true

  attributes :id, :user_id, :title, :text, :average_ratings, :image_url, :latitude, :longitude
  has_many :comments
  # has_many :ratings
end
