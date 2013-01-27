class SpotSerializer < ActiveModel::Serializer
  embed :ids, :include => true

  attributes :id, :title, :text
  has_many :comments, :key => :comments
end
