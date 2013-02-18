class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :is_guest
end
