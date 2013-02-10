class SpotSerializer < ActiveModel::Serializer
  embed :ids, :include => true

  attributes :id, :title, :text, :average_ratings, :image_url
  has_many :comments, :key => :comments
  # has_many :ratings, :key => :ratings
end
