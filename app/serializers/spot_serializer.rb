class SpotSerializer < ActiveModel::Serializer
  include ActionView::Helpers::NumberHelper

  embed :ids, :include => true

  attributes :id, :user_id, :title, :text, :average_ratings, :image_url, :latitude, :longitude, :distance

  def distance
    return "#{number_with_precision(object.distance_from(scope), :precision => 1, :separator => ',')} km"
  end

  has_many :comments
  # has_many :ratings
end
